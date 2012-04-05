
 define([
  '../blueprint',
  '../../models/blueprint',
  '../../models/blueprintstyle',
  'qunit',
], function (BlueprintController,BlueprintModel,BlueprintStyleModel) {
    
    var ViewStub = function () {

        _.extend(this, Backbone.Events);

        // form view interface

        this.set = function (data) {
            this._viewData = data;
        };

    };

    function testBlueprintController () {

        QUnit.module('BlueprintController tests');

        QUnit.test('constructor test', function () {

            var blueprintView = new ViewStub();
            var borderView = new ViewStub();
            var gridView = new ViewStub();

            var style = new BlueprintStyleModel();
            var model = new BlueprintModel();

            var target = new BlueprintController(blueprintView, gridView, borderView, model, style);

            QUnit.equal(target.model, model, "model test");
            QUnit.equal(target.style, style, "style test");
            QUnit.equal(target.blueprintView, blueprintView, "blueprintView test");
            QUnit.equal(target.borderView, borderView, "borderView test");
            QUnit.equal(target.gridView, gridView, "gridView test");
        });

        QUnit.test('controller logic: first view and model synchronization tests', function () {

            var blueprintView = new ViewStub();
            var borderView = new ViewStub();
            var gridView = new ViewStub();

            var style = new BlueprintStyleModel();
            var model = new BlueprintModel();

            var target = new BlueprintController(blueprintView, gridView, borderView, model, style);

            QUnit.equal(target.model.get('width'), blueprintView._viewData.width, "blueprint width test");
            QUnit.equal(target.model.get('width'), gridView._viewData.width, "grid width test");
            QUnit.equal(target.model.get('width'), borderView._viewData.width, "border width test");

            QUnit.equal(target.model.get('height'), blueprintView._viewData.width, "blueprint height test");
            QUnit.equal(target.model.get('height'), gridView._viewData.width, "grid height test");
            QUnit.equal(target.model.get('height'), borderView._viewData.width, "border height test");

            QUnit.equal(target.model.get('gridStep'), gridView._viewData.step, "grid step test");

            QUnit.equal(target.style.get('backColor'), blueprintView._viewData.color, "blueprint color test");
            QUnit.equal(target.style.get('borderOpacity'), borderView._viewData.opacity, "border opacity test");
            QUnit.equal(target.style.get('gridColor'), gridView._viewData.color, "grid color test");
            QUnit.equal(target.style.get('borderOpacity'), borderView._viewData.opacity, "border opacity test");
        });

        QUnit.test('controller logic: update tests', function () {

            var blueprintView = new ViewStub();
            var borderView = new ViewStub();
            var gridView = new ViewStub();

            var style = new BlueprintStyleModel();
            var model = new BlueprintModel();

            var target = new BlueprintController(blueprintView, gridView, borderView, model, style);

            style.set('borderOpacity', 0.1);
            model.set('width', 340);

            QUnit.equal(target.model.get('width'), blueprintView._viewData.width, "blueprint width test");
            QUnit.equal(target.model.get('width'), gridView._viewData.width, "grid width test");
            QUnit.equal(target.model.get('width'), borderView._viewData.width, "border width test");

            QUnit.equal(target.style.get('borderOpacity'), borderView._viewData.opacity, "border opacity test");

        });
    };
    return testBlueprintController;
});