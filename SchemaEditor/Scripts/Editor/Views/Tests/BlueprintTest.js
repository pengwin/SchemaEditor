// Use this as a quick template for future modules
define([
  '../blueprint',
  'jquery',
  'qunit',
], function (BlueprintView, $) {

    var testBlueprintView = function () {
        /// <summary>
        /// Tests for <reference path="Editor.Views.BlueprintView"/>
        /// </summary>

        var testBenchId = "#test_workbench";
        var testBenchTag = "div" + testBenchId;
        var getBlueprintDivElement = function () { return $(testBenchTag + " div.blueprint"); };
        var getBlueprintSvgElement = function () { return $(testBenchTag + " div.blueprint svg"); };

        QUnit.module("BlueprintView Tests", {
            setup: function () {
            },
            teardown: function () {
                $(testBenchTag + " .blueprint").remove();
            }
        });


        QUnit.test("constructor test", function () {
            var blueprintView1 = new BlueprintView({ container: $(testBenchId) });
            var blueprintView2 = new BlueprintView({ container: $(testBenchId) });

            QUnit.equal(getBlueprintDivElement().length, 2, "test div quantity==2");
            QUnit.equal(getBlueprintSvgElement().length, 2, "test svg quantity==1");
        });

        QUnit.test("constructor without container test", function () {
            try {
                var blueprintView = new BlueprintView();
            }
            catch (err) {
                QUnit.equal(err.message, "attribute: 'container' is not set ", "expection has been thrown");
            }
        });

        QUnit.test("constructor with size test", function () {
            var blueprintView = new BlueprintView({ container: $(testBenchId), width: 250, height: 300, padding: 20 });

            // test div size
            QUnit.equal(getBlueprintDivElement().width(), 250, "test div width");
            QUnit.equal(getBlueprintDivElement().height(), 300, "test div height");

            // test svg size
            QUnit.equal(getBlueprintSvgElement().attr('width'), 250, "test svg width");
            QUnit.equal(getBlueprintSvgElement().attr('height'), 300, "test svg height");
        });

        QUnit.test("set test", function () {
            var blueprintView = new BlueprintView({ container: $(testBenchId), padding: 0 });

            blueprintView.set({ width: 250 });
            blueprintView.set({ height: 300 });

            // test div size
            QUnit.equal(getBlueprintDivElement().width(), 250, "test set width: div width");
            QUnit.equal(getBlueprintDivElement().height(), 300, "test set height: div height");

            blueprintView.set({ color: '#efefef' });
            QUnit.equal(getBlueprintDivElement().css('background-color'), "rgb(239, 239, 239)", "test set color: div color");

            // test svg size
            QUnit.equal(getBlueprintSvgElement().attr('width'), 250, "test set width: svg width");
            QUnit.equal(getBlueprintSvgElement().attr('height'), 300, "test set height: svg height");

            blueprintView.set({ width: 450, height: 100 });

            // test div size
            QUnit.equal(getBlueprintDivElement().width(), 450, "test set width,height: div width");
            QUnit.equal(getBlueprintDivElement().height(), 100, "test set width,height: div height");

            // test svg size
            QUnit.equal(getBlueprintSvgElement().attr('width'), 450, "test set width,height: svg width");
            QUnit.equal(getBlueprintSvgElement().attr('height'), 100, "test set width,height: svg height");

            blueprintView.set({ padding: 20 });
            QUnit.equal(getBlueprintDivElement().css('padding-left'), '20px', "test set padding: css padding-left test");
            QUnit.equal(getBlueprintDivElement().css('padding-top'), '20px', "test set padding: css padding-topt test");
        });

        QUnit.asyncTest("mouseup async test", function () {
            QUnit.expect(1);
            var blueprintView = new BlueprintView({ container: $(testBenchId) });

            blueprintView.on('mouseup', function (sender) {
                QUnit.ok(true, "mouse click was called");
            });

            getBlueprintDivElement().trigger('mouseup'); // simulate click

            setTimeout(function () {
                QUnit.start();
            }, 100);
        });

        QUnit.asyncTest("mousemove async test", function () {
            QUnit.expect(1);
            var blueprintView = new BlueprintView({ container: $(testBenchId) });

            blueprintView.on('mousemove', function (sender, curpos) {
                QUnit.ok(true, "mouse move was called");
            });

            getBlueprintDivElement().trigger('mousemove'); // simulate mousemove

            setTimeout(function () {
                QUnit.start();
            }, 100);
        });
    };
    return testBlueprintView;
});