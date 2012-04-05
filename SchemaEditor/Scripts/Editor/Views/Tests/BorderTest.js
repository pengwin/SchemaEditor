define([
  '../border',
  'qunit',
  'raphael'
], function (BorderView) {
    function testBorderView() {

        var testBenchName = 'test_workbench';
        var testBenchId = "#" + testBenchName;
        var testBenchTag = "div" + testBenchId;
        var getBorderElement = function () { return $(testBenchTag + " svg rect#border"); };

        var paper;

        QUnit.module("BorderView Tests", {
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
            var border = new BorderView({ blueprint: { _paper: paper }, width: 400, height: 500 });

            QUnit.equal(getBorderElement().length, 1, "test border quantity==0 ");
            QUnit.equal(getBorderElement().attr('width'), 400, "test border width");
            QUnit.equal(getBorderElement().attr('height'), 500, "test border height");
        });

        QUnit.test("constructor without blueprint test", function () {
            try {
                var border = new BorderView({});
            } catch (err) {
                QUnit.equal(err.message, "attribute: 'blueprint' is not set", "exception has been thrown");
            }

        });

        QUnit.test("set test", function () {
            var border = new BorderView({ blueprint: { _paper: paper }, width: 400, height: 500 });

            border.set({ width: 200 });
            QUnit.equal(getBorderElement().attr('width'), 200, "test border set width");

            border.set({ height: 250 });
            QUnit.equal(getBorderElement().attr('height'), 250, "test border set height");

            border.set({ color: 'green' });
            QUnit.equal(getBorderElement().attr('stroke'), '#008000', "test border set color");

            border.set({ opacity: 0.1 });
            QUnit.equal(getBorderElement().attr('stroke-opacity'), '0.1', "test border set opacity");

            border.set({ line_thickness: 2.0 });
            QUnit.equal(getBorderElement().attr('stroke-width'), '2', "test border set line thickness");
        });

    };

    return testBorderView;
});