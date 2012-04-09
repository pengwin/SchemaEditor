define([
  'widgets/blueprintwidget',
  'jquery',
  'qunit',
], function (BlueprintWidget, $) {

    var testBlueprintWidget = function () {

        QUnit.module("BlueprintWidget Tests");

        QUnit.test("constructor test", function () {
            


            var target = new BlueprintWidget();

            QUnit.ok(typeof target.model != 'undefined', 'model has been created');
            QUnit.ok(typeof target.style != 'undefined', 'style has been created');
            QUnit.ok(typeof target.form != 'undefined', 'form has been created');
            QUnit.ok(typeof target.view != 'undefined', 'view has been created');
            QUnit.ok(typeof target.editAction != 'undefined', 'editAction has been created');
        });

        QUnit.test("update test", function () {
            var target = new BlueprintWidget();

            target.model.set('width', 500);
            target.style.set('color', 'yellow');

            target.update();

            QUnit.equal($(target.view.el).width(), 500, 'view width has been changed');
            QUnit.equal($(target.view.el).css('background-color'), 'yellow', 'view background color has been changed');

        });
    };

    window.testBlueprintWidget = testBlueprintWidget;
    return testBlueprintWidget;
});