// Use this as a quick template for future modules
define([
  '../rectangle',
  'qunit',
], function (RectangleModel) {

    var testRectangleModel = function () {

        QUnit.module("RectangleModel Tests");

        QUnit.test("constructor tests", function () {
            var model = new RectangleModel();
            QUnit.equal(model.get('width'), 200, 'test defaults: width');
            QUnit.equal(model.get('height'), 200, 'test defaults: height');
            QUnit.equal(model.get('x'), 0, 'test defaults: x');
            QUnit.equal(model.get('y'), 0, 'test defaults: y');
        });

        QUnit.test("validate tests", function () {
            var model = new RectangleModel({ x: 20,y: 20,width: 100, height: 100});
            model.set('width', -5);
            QUnit.equal(model.get('width'), 100, 'test validate: width bottom limit');
            model.set('height', -200);
            QUnit.equal(model.get('height'), 100, 'test validate: height bottom limit');
            model.set('width', 800);
            QUnit.equal(model.get('width'), 100, 'test validate: width top limit');
            model.set('height', 800);
            QUnit.equal(model.get('height'), 100, 'test validate: height top limit');
            model.set('x', 800);
            QUnit.equal(model.get('x'), 20, 'test validate: height top limit');
        });

    };

    return testRectangleModel;
});