
define([
  '../grid',
  'qunit',
  'raphael'
], function (GridView) {
    function testGridView() {


        var testBenchName = 'test_workbench';
        var testBenchId = "#" + testBenchName;
        var testBenchTag = "div" + testBenchId;
        var getGridElement = function () { return $(testBenchTag + " svg path#grid"); };
        var paper;

        QUnit.module("GridView Tests", {
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
            var grid = new GridView({ blueprint: { _paper: paper }, step: 5, width: 400, height: 400 });

            QUnit.equal(getGridElement().length, 1, "test grid quantity==0 ");

        });

        QUnit.test("constructor without blueprint test", function () {
            try {
                var grid = new GridView({});
            } catch (err) {
                QUnit.equal(err.message, "attribute: 'blueprint' is not set", "exception has been thrown");
            }

        });

        QUnit.test("set test", function () {
            var grid = new GridView({ blueprint: { _paper: paper }, step: 20, width: 400, height: 400 });

            grid.set({ color: 'green' });
            QUnit.equal(getGridElement().attr('stroke'), '#008000', "test grid set color");

            grid.set({ opacity: 0.1 });
            QUnit.equal(getGridElement().attr('stroke-opacity'), '0.1', "test grid set opacity");

            grid.set({ line_thickness: 0.1 });
            QUnit.equal(getGridElement().attr('stroke-width'), '0.1', "test grid set line thickness");

        });

    };
    return testGridView;
});