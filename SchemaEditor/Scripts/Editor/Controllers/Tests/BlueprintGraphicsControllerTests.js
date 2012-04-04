Editor.Controllers.Test = (function (parent) {

    var BlueprintModelMock = Backbone.Model.extend({

        defaults: {
            width: 10,
            height: 10,
            margin: 2,
            gridStep: 1
        }

    });

    var BlueprintStyleModelMock = Backbone.Model.extend({

        defaults: {
            backColor: 'white',
            gridColor: 'gray',
            borderColor: 'gray',

            gridThickness: 0.5,
            borderThickness: 1,

            borderOpacity: 0.8,
            gridOpacity: 0.4
        }
    });

    var ViewMock = function () {

        _.extend(this, Backbone.Events);

        // form view interface

        this.set = function (data) {
            this._viewData = data;
        };

    };

    var BlueprintGraphicsController = Editor.Controllers.BlueprintGraphicsController; // alias

    parent.BlueprintGraphicsControllerTests = function () {

        module('BlueprintGraphicsController tests');

        test('constructor test', function () {

            var blueprintView = new ViewMock();
            var borderView = new ViewMock();
            var gridView = new ViewMock();

            var style = new BlueprintStyleModelMock();
            var model = new BlueprintModelMock();

            var target = new BlueprintGraphicsController(blueprintView, gridView, borderView, model, style);

            equal(target.model, model, "model test");
            equal(target.style, style, "style test");
            equal(target.blueprintView, blueprintView, "blueprintView test");
            equal(target.borderView, borderView, "borderView test");
            equal(target.gridView, gridView, "gridView test");
        });

        test('controller logic: first view and model synchronization tests', function () {

            var blueprintView = new ViewMock();
            var borderView = new ViewMock();
            var gridView = new ViewMock();

            var style = new BlueprintStyleModelMock();
            var model = new BlueprintModelMock();

            var target = new BlueprintGraphicsController(blueprintView, gridView, borderView, model, style);

            equal(target.model.get('width'), blueprintView._viewData.width, "blueprint width test");
            equal(target.model.get('width'), gridView._viewData.width, "grid width test");
            equal(target.model.get('width'), borderView._viewData.width, "border width test");

            equal(target.model.get('height'), blueprintView._viewData.width, "blueprint height test");
            equal(target.model.get('height'), gridView._viewData.width, "grid height test");
            equal(target.model.get('height'), borderView._viewData.width, "border height test");

            equal(target.model.get('gridStep'), gridView._viewData.step, "grid step test");

            equal(target.style.get('backColor'), blueprintView._viewData.color, "blueprint color test");
            equal(target.style.get('borderOpacity'), borderView._viewData.opacity, "border opacity test");
            equal(target.style.get('gridColor'), gridView._viewData.color, "grid color test");
            equal(target.style.get('borderOpacity'), borderView._viewData.opacity, "border opacity test");
        });

        test('controller logic: update tests', function () {

            var blueprintView = new ViewMock();
            var borderView = new ViewMock();
            var gridView = new ViewMock();

            var style = new BlueprintStyleModelMock();
            var model = new BlueprintModelMock();

            var target = new BlueprintGraphicsController(blueprintView, gridView, borderView, model, style);

            style.set('borderOpacity', 0.1);
            model.set('width',340);

            equal(target.model.get('width'), blueprintView._viewData.width, "blueprint width test");
            equal(target.model.get('width'), gridView._viewData.width, "grid width test");
            equal(target.model.get('width'), borderView._viewData.width, "border width test");

            equal(target.style.get('borderOpacity'), borderView._viewData.opacity, "border opacity test");

        });
    };
    return parent;

} (Editor.Controllers.Test || {}));