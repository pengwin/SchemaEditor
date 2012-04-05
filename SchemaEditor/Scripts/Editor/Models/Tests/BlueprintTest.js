// Use this as a quick template for future modules
define([
  '../blueprint',
  'jquery',
  'qunit',
], function (BlueprintModel, $) {

    var testBlueprint = function () {

        QUnit.module("BlueprintModel Tests");

        QUnit.test("constructor tests", function () {
            var model = new BlueprintModel();
            QUnit.equal(model.get('width'), 200, 'test defaults: width');
            QUnit.equal(model.get('height'), 200, 'test defaults: height');
            QUnit.equal(model.get('margin'), 20, 'test defaults: margin');
            QUnit.equal(model.get('gridStep'), 20, 'test defaults: grid step');
        });

        QUnit.test("validate tests", function () {
            var model = new BlueprintModel({ width: 100, height: 100, widthLimit: 500, heightLimit: 500 });
            model.set('width', -5);
            QUnit.equal(model.get('width'), 100, 'test validate: width bottom limit');
            model.set('height', -200);
            QUnit.equal(model.get('height'), 100, 'test validate: height bottom limit');
            model.set('width', 800);
            QUnit.equal(model.get('width'), 100, 'test validate: width top limit');
            model.set('height', 800);
            QUnit.equal(model.get('height'), 100, 'test validate: height top limit');
        });

        QUnit.asyncTest("error callback async test test", function () {
            QUnit.expect(1);
            var model = new BlueprintModel({ width: 100, height: 100, widthLimit: 500, heightLimit: 500 });

            model.on('error', function (model, error) {
                QUnit.equal(error, 'width is Not a Number', "width NaN error occurred");
            });

            model.set('width', 'testNan');

            setTimeout(function () {
                QUnit.start();
            }, 100);
        });
    };

    return testBlueprint;
});