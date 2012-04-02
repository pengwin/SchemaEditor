Editor.Views.Test = (function (parent) {

    var BlueprintViewTests = function () {
        /// <summary>
        /// Tests for <reference path="Editor.Views.BlueprintView"/>
        /// </summary>

        var BlueprintView = Editor.Views.BlueprintView;
        var testBenchId = "#test_workbench";
        var testBenchTag = "div" + testBenchId;

        module("BlueprintView Tests", {
            setup: function () {

            },
            teardown: function () {
                $(testBenchTag + " .blueprint").remove();
            }
        });

        var clean = function () {
        };

        test("blueprint tag creation test", function () {
            var blueprintView1 = new BlueprintView({ container: $(testBenchId) });
            var blueprintView2 = new BlueprintView({ container: $(testBenchId) });

            equal($(testBenchTag + " div.blueprint").length, 2, "test div quantity==2");

            clean();
        });

        test("blueprint svg creation test", function () {
            var blueprintView = new BlueprintView({ container: $(testBenchId) });

            equal($(testBenchTag + " div.blueprint svg").length, 1, "test svg quantity==1");

            clean();
        });

        test("blueprint size is set in constructor test", function () {
            var blueprintView = new BlueprintView({ container: $(testBenchId), width: 250, height: 300 });

            // test div size
            equal($(testBenchTag + " div.blueprint").width(), 250, "test div width");
            equal($(testBenchTag + " div.blueprint").height(), 300, "test div height");

            // test svg size
            equal($(testBenchTag + " div.blueprint svg").width(), 250, "test svg width");
            equal($(testBenchTag + " div.blueprint svg").height(), 300, "test svg height");

            clean();
        });

        test("blueprint set test", function () {
            var blueprintView = new BlueprintView({ container: $(testBenchId) });

            blueprintView.set({ width: 250 });
            blueprintView.set({ height: 300 });

            // test div size
            equal($(testBenchTag + " div.blueprint").width(), 250, "test set width: div width");
            equal($(testBenchTag + " div.blueprint").height(), 300, "test set height: div height");

            blueprintView.set({ color: '#efefef' });
            equal($(testBenchTag + " div.blueprint").css('background-color'), "rgb(239, 239, 239)", "test div color");

            // test svg size
            equal($(testBenchTag + " div.blueprint svg").width(), 250, "test set width: svg width");
            equal($(testBenchTag + " div.blueprint svg").height(), 300, "test set height: svg height");

            blueprintView.set({ width: 450, height: 100 });

            // test div size
            equal($(testBenchTag + " div.blueprint").width(), 450, "test set width,height: div width");
            equal($(testBenchTag + " div.blueprint").height(), 100, "test set width,height: div height");

            // test svg size
            equal($(testBenchTag + " div.blueprint svg").width(), 450, "test set width,height: svg width");
            equal($(testBenchTag + " div.blueprint svg").height(), 100, "test set width,height: svg height");

            clean();
        });

        asyncTest("blueprint mouse click async test", function () {
            expect(1);
            var blueprintView = new BlueprintView({ container: $(testBenchId) });
            blueprintView.registerOnClickHandler(function (sender) {
                ok(true, "mouse click was called");
            });

            $(testBenchTag + " div.blueprint").trigger('click'); // simulate click

            setTimeout(function () {
                start();
            }, 100);
        });

        asyncTest("blueprint mouse move async test", function () {
            expect(1);
            var blueprintView = new BlueprintView({ container: $(testBenchId) });
            blueprintView.registerOnMousemoveHandler(function (sender, curpos) {
                ok(true, "mouse move was called");
            });

            $(testBenchTag + " div.blueprint").trigger('mousemove'); // simulate mousemove

            setTimeout(function () {
                start();
            }, 100);
        });
    };

    parent.BlueprintViewTests = BlueprintViewTests;
    return parent;

} (Editor.Views.Test || {}));