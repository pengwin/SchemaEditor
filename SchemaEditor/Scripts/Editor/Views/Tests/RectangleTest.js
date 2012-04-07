define([
  '../rectangle',
  'qunit',
  'raphael'
], function (RectangleView) {
    function testRectangleView() {

        var testBenchName = 'test_workbench';
        var testBenchId = "#" + testBenchName;
        var testBenchTag = "div" + testBenchId;
        var getRectElement = function () { return $(testBenchTag + " svg rect"); };

        var paper;

        QUnit.module("RectangleView Tests", {
            setup: function () {
                paper = Raphael(testBenchName, 400, 400);
            },
            teardown: function () {
                if (paper) {
                    paper.remove();
                }
            }
        });

        QUnit.test("constructor test", function () {
            var border = new RectangleView({ blueprint: { _paper: paper }, width: 400, height: 500 });

            QUnit.equal(getRectElement().length, 1, "test border quantity==0 ");
            QUnit.equal(getRectElement().attr('width'), 400, "test border width");
            QUnit.equal(getRectElement().attr('height'), 500, "test border height");
        });

        QUnit.test("constructor without blueprint test", function () {
            try {
                var border = new RectangleView({});
            } catch (err) {
                QUnit.equal(err.message, "attribute: 'blueprint' is not set", "exception has been thrown");
            }

        });

        QUnit.test("set test", function () {
            var border = new RectangleView({ blueprint: { _paper: paper }, width: 400, x: 10,y : 10,height: 500 });

            border.set({ width: 200 });
            QUnit.equal(getRectElement().attr('width'), 200, "test width");

            border.set({ height: 250 });
            QUnit.equal(getRectElement().attr('height'), 250, "test height");

            border.set({ color: 'green' });
            QUnit.equal(getRectElement().attr('fill'), '#008000', "test fill color");

            border.set({ opacity: 0.1 });
            QUnit.equal(getRectElement().attr('fill-opacity'), '0.1', "test fill opacity");

            border.set({ borderThickness: 2.0 });
            QUnit.equal(getRectElement().attr('stroke-width'), '2', "test border line thickness");
        });

    };

    return testRectangleView;
});