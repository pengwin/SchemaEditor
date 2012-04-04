Editor.Controllers.Test = (function (parent) {

    var BlueprintModelMock = Backbone.Model.extend({

        defaults: {
            width: 10,
            height: 10,
            margin: 2,
            gridStep: 1
        },

        validate: function (attrs) {
            if (attrs.width <= 0) {
                return "width should be greater than 0";
            }
            if (attrs.height <= 0) {
                return "height should be greater than 0";
            }
        }

    });

    var BlueprintFormViewMock = function () {

        _.extend(this, Backbone.Events);

        this._hidden = true;

        this._message = "";

        this._viewData = { width: 100, height: 100, margin: 10, gridStep: 20 };

        this.simulateOkClick = function () {
            this.okClick();
        };

        // form view interface

        this.show = function () { this._hidden = false };

        this.hide = function () { this._hidden = true };

        this.putMessage = function (message) {
            this._message = message;
        };

        this.fillData = function (data) {
            this._viewData = data;
        };

        this.fetchData = function (data) {
            return this._viewData;
        };
    };

    var BlueprintFormController = Editor.Controllers.BlueprintFormController; // alias

    parent.BlueprintFormControllerTests = function () {

        module('BlueprintFormController tests');

        test('constructor test', function () {

            var formView = new BlueprintFormViewMock();
            var model = new BlueprintModelMock();

            var target = new BlueprintFormController(formView, model);

            equal(target.model, model, "model test");
            equal(target.formView, formView, "formView test");
        });

        test('updateView test', function () {

            var formView = new BlueprintFormViewMock();
            formView._viewData = {
                width: 100,
                height: 150,
                margin: 5,
                gridStep: 10
            };
            var model = new BlueprintModelMock({
                width: 200,
                height: 250,
                margin: 10,
                gridStep: 20
            });

            var target = new BlueprintFormController(formView, model);

            target.updateView();

            equal(formView._viewData.width, model.get('width'), "viewData width test");
            equal(formView._viewData.height, model.get('height'), "viewData height test");
        });

        test('updateModel test', function () {

            var formView = new BlueprintFormViewMock();

            formView._viewData = {
                width: 100,
                height: 150,
                margin: 5,
                gridStep: 10
            };

            var model = new BlueprintModelMock({
                width: 200,
                height: 250,
                margin: 10,
                gridStep: 20
            });

            var target = new BlueprintFormController(formView, model);

            target.updateModel();

            equal(model.get('width'), formView._viewData.width, "model width test");
            equal(model.get('height'), formView._viewData.height, "model height test");
        });

        test('show test', function () {

            var formView = new BlueprintFormViewMock();
            formView._viewData = {
                width: 100,
                height: 150,
                margin: 5,
                gridStep: 10
            };
            var model = new BlueprintModelMock({
                width: 200,
                height: 200,
                margin: 10,
                gridStep: 20
            });

            var target = new BlueprintFormController(formView, model);

            target.showForm();

            equal(formView._viewData.width, model.get('width'), "form view has been updated");
            equal(formView._hidden, false, "form view visible test");
        });

        test('controller logic test', function () {

            var model = new BlueprintModelMock({
                width: 200,
                height: 200,
                margin: 10,
                gridStep: 20
            });

            var formView = new BlueprintFormViewMock();

            var target = new BlueprintFormController(formView, model);

            target.showForm();

            formView._viewData = {
                width: 100,
                height: 100,
                margin: 5,
                gridStep: 10
            };

            formView.simulateOkClick();

            equal(formView._hidden, true, "form has been hidden");
            equal(model.get('width'), formView._viewData.width, "model width has been changed");
            equal(model.get('margin'), formView._viewData.margin, "model margin has been changed");

            target.showForm();

            formView._viewData = {
                width: -100,
                height: -100,
                margin: 50,
                gridStep: 10
            };

            formView.simulateOkClick();

            equal(formView._hidden, false, "form hasn't been hidden");
            equal(formView._message, "Error: width should be greater than 0", "error message test");
            notEqual(model.get('width'), formView._viewData.width, "model width hasn't been changed");
            notEqual(model.get('margin'), formView._viewData.margin, "model margin hasn't been changed");
        });

    };
    return parent;

} (Editor.Controllers.Test || {}));