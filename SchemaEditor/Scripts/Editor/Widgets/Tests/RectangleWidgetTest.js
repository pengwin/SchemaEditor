define([
  'widgets/rectanglewidget',
  'widgets/blueprintwidget',
  'jquery',
  'qunit',
], function (RectangleWidget, BlueprintWidget, $) {

    var testRectangleWidget = function () {

        QUnit.module("RectangleWidget Tests");

        QUnit.test("constructor test", function () {
            var actionsState = {
                editAction : false,
                drawAction: false
            };
            var blueprint = new BlueprintWidget(actionsState);
            var view = blueprint.view.drawRectangle();
            var target = new RectangleWidget(view, actionsState);

            QUnit.ok(typeof target.model != 'undefined', 'model has been created');
            QUnit.ok(typeof target.form != 'undefined', 'form has been created');
            QUnit.ok(typeof target.view != 'undefined', 'view has been created');
        });

        QUnit.test("update test", function () {
            var actionsState = {
                editAction: false,
                drawAction: false
            };
            var blueprint = new BlueprintWidget(actionsState);
            blueprint.model.set('width', 300);
            var view = blueprint.view.drawRectangle();
            var target = new RectangleWidget(view, actionsState);

            var node = target.view._el.node;

            target.model.set('width', 500); // put invalid width (greater than blueprint width=300)
            target.update();

            QUnit.equal($(node).attr('width'), 1, "rectangle width has not been changed");

            target.model.set('width', 100); // put valid width
            target.update();

            QUnit.equal($(node).attr('width'), 100, "rectangle width has been changed");

            blueprint.style.set('assetsOpacity', 0.1);
            target.update();

            QUnit.equal($(node).attr('fill-opacity'), 0.1, "rectangle width has been changed");

        });
    };

    window.testRectangleWidget = testRectangleWidget;
    return testRectangleWidget;
});