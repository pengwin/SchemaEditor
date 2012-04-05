// Use this as a quick template for future modules
define([
  '../blueprintstyle',
  'jquery',
  'qunit',
], function (BlueprintStyleModel,$) {
    
    var testBlueprintStyle = function () {


        QUnit.module("BlueprintStyleModel Tests");

        QUnit.test("constructor tests", function () {
            var model = new BlueprintStyleModel();
            QUnit.equal(model.get('backColor'), 'white', 'test defaults: backColor');
            QUnit.equal(model.get('gridColor'), 'gray', 'test defaults: gridColor');
            QUnit.equal(model.get('borderColor'), 'gray', 'test defaults: borderColor');
            QUnit.equal(model.get('gridThickness'), 0.5, 'test defaults: gridThickness');
            QUnit.equal(model.get('borderThickness'), 1, 'test defaults: borderThickness');
            QUnit.equal(model.get('borderOpacity'), 0.8, 'test defaults: borderOpacity');
            QUnit.equal(model.get('gridOpacity'), 0.4, 'test defaults: gridOpacity');

        });

        QUnit.test("validate tests", function () {
            var model = new BlueprintStyleModel({ gridThickness: 1, borderThickness: 1, borderOpacity: 1, gridOpacity: 1 });
            model.set('gridThickness', -0.5);
            QUnit.equal(model.get('gridThickness'), 1, 'test validate: gridThickness');
            model.set('borderThickness', -2.0);
            QUnit.equal(model.get('borderThickness'), 1, 'test validate: borderThickness');
            model.set('borderOpacity', -1.0);
            QUnit.equal(model.get('borderOpacity'), 1, 'test validate: borderOpacity');
            model.set('gridOpacity', -1.0);
            QUnit.equal(model.get('gridOpacity'), 1, 'test validate: gridOpacity');
        });
    };
    return testBlueprintStyle;
});