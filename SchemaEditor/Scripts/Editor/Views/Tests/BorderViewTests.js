Editor.Views.Test = (function (parent) {

    function BorderViewTests() {

        var BorderView = Editor.Views.BorderView; // alias
        var testBenchName = 'test_workbench';
        var testBenchId = "#" + testBenchName;
        var testBenchTag = "div" + testBenchId;
        var getBorderElement = function () { return $(testBenchTag + " svg rect#border"); };

        var paper;

        var BlueprintMock = function (paper) {
            this._paper = paper;
        };

        module("BorderView Tests", {
            setup: function () {
                paper = Raphael(testBenchName, 400, 400);
            },
            teardown: function () {
                if (paper) {
                    paper.remove();
                }
            }
        });

        test("constructor test", function () {
            var blueprint = new BlueprintMock(paper);
            
            var target = new BorderView({blueprintView: blueprint, width: 400, height: 500 });

            equal(getBorderElement().length, 1, "test border quantity==0 ");
            equal(getBorderElement().attr('width'), 400, "test border width");
            equal(getBorderElement().attr('height'), 500, "test border height");
        });

        test("set test", function () {
            var blueprint = new BlueprintMock(paper);

            var border = new BorderView({ blueprintView: blueprint, width: 400, height: 500 });

            border.set({ width: 200 });
            equal(getBorderElement().attr('width'), 200, "test border set width");

            border.set({ height: 250 });
            equal(getBorderElement().attr('height'), 250, "test border set height");

            border.set({ color: 'green' });
            equal(getBorderElement().attr('stroke'), '#008000', "test border set color");

            border.set({ opacity: 0.1 });
            equal(getBorderElement().attr('stroke-opacity'), '0.1', "test border set opacity");

            border.set({ line_thickness: 2.0 });
            equal(getBorderElement().attr('stroke-width'), '2', "test border set line thickness");
        });

    };

    parent.BorderViewTests = BorderViewTests;
    return parent;

} (Editor.Views.Test || {}));