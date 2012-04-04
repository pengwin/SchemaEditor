Editor.Views.Test = (function (parent) {

    var BlueprintViewTests = function () {
        /// <summary>
        /// Tests for <reference path="Editor.Views.BlueprintView"/>
        /// </summary>

        var BlueprintView = Editor.Views.BlueprintView; //alias
        var testBenchId = "#test_workbench";
        var testBenchTag = "div" + testBenchId;
        var getBlueprintDivElement = function () { return $(testBenchTag + " div.blueprint"); };
        var getBlueprintSvgElement = function () { return $(testBenchTag + " div.blueprint svg"); };

        module("BlueprintView Tests", {
            setup: function () {

            },
            teardown: function () {
                $(testBenchTag + " .blueprint").remove();
            }
        });


        test("constructor test", function () {
            var blueprintView1 = new BlueprintView({ container: $(testBenchId) });
            var blueprintView2 = new BlueprintView({ container: $(testBenchId) });

            equal(getBlueprintDivElement().length, 2, "test div quantity==2");
            equal(getBlueprintSvgElement().length, 2, "test svg quantity==1");
        });

        test("constructor without container test", function () {
            try {
                var blueprintView = new BlueprintView();
            }
            catch (err) {
                equal(err.message, "Container is not set", "expection has been thrown");
            }
        });

        test("constructor with size test", function () {
            var blueprintView = new BlueprintView({ container: $(testBenchId), width: 250, height: 300, padding: 20 });

            // test div size
            equal(getBlueprintDivElement().width(), 250, "test div width");
            equal(getBlueprintDivElement().height(), 300, "test div height");

            // test svg size
            equal(getBlueprintSvgElement().attr('width'), 250, "test svg width");
            equal(getBlueprintSvgElement().attr('height'), 300, "test svg height");
        });

        test("set test", function () {
            var blueprintView = new BlueprintView({ container: $(testBenchId), padding: 0 });

            blueprintView.set({ width: 250 });
            blueprintView.set({ height: 300 });

            // test div size
            equal(getBlueprintDivElement().width(), 250, "test set width: div width");
            equal(getBlueprintDivElement().height(), 300, "test set height: div height");

            blueprintView.set({ color: '#efefef' });
            equal(getBlueprintDivElement().css('background-color'), "rgb(239, 239, 239)", "test set color: div color");

            // test svg size
            equal(getBlueprintSvgElement().attr('width'), 250, "test set width: svg width");
            equal(getBlueprintSvgElement().attr('height'), 300, "test set height: svg height");

            blueprintView.set({ width: 450, height: 100 });

            // test div size
            equal(getBlueprintDivElement().width(), 450, "test set width,height: div width");
            equal(getBlueprintDivElement().height(), 100, "test set width,height: div height");

            // test svg size
            equal(getBlueprintSvgElement().attr('width'), 450, "test set width,height: svg width");
            equal(getBlueprintSvgElement().attr('height'), 100, "test set width,height: svg height");

            blueprintView.set({ padding: 20 });
            equal(getBlueprintDivElement().css('padding-left'), '20px', "test set padding: css padding-left test");
            equal(getBlueprintDivElement().css('padding-top'), '20px', "test set padding: css padding-topt test");
        });

        asyncTest("mouseup async test", function () {
            expect(1);
            var blueprintView = new BlueprintView({ container: $(testBenchId) });

            blueprintView.on('mouseup',function (sender) {
                ok(true, "mouse click was called");
            });

            getBlueprintDivElement().trigger('mouseup'); // simulate click

            setTimeout(function () {
                start();
            }, 100);
        });

        asyncTest("mousemove async test", function () {
            expect(1);
            var blueprintView = new BlueprintView({ container: $(testBenchId) });

            blueprintView.on('mousemove',function (sender, curpos) {
                ok(true, "mouse move was called");
            });

            getBlueprintDivElement().trigger('mousemove'); // simulate mousemove

            setTimeout(function () {
                start();
            }, 100);
        });
    };

    parent.BlueprintViewTests = BlueprintViewTests;
    return parent;

} (Editor.Views.Test || {}));