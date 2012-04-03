Editor.Views.Test = (function (parent) {

    var PopupView = Editor.Views.PopupView; // alias

    var testBenchId = "#test_workbench";

    var PopupOverlayMock = function () {

        this.addSubPopup = function (popup) {
            $(testBenchId).append(popup.el);
        };

        this.hidden = false;
        this.allHidden = false;

        this.hide = function () {
            this.hidden = true;
        };

        this.hideAllSubPopups = function () {
            this.allHidden = true;
        };
    };

    var PopupViewTests = function () {

        module("PopupView Tests", {
            setup: function () {

            },
            teardown: function () {
                $(testBenchId).html('');
            }
        });

        test("constructor tests", function () {
            var popupOverlay = new PopupOverlayMock();
            var popup = new PopupView({ overlayView: popupOverlay, context: { content: "<div id='temp'></div>"} });

            equal($(testBenchId + " div.popup").length, 1, "div.popup quantity test");
            equal($(testBenchId + " div.popup div#popup_controls input#popup_ok").length, 1, "button ok quantity test");
        });

        test("hide tests", function () {
            var popupOverlay = new PopupOverlayMock();
            var popup = new PopupView({ overlayView: popupOverlay, context: { content: "<div id='temp'></div>"} });
            popup.hide();

            equal($(testBenchId + " div.popup").is(":visible"), false, "div.popup hidden test");
            equal(popupOverlay.hidden, true, "overlay mock hidden test");
        });

        test("show tests", function () {
            var popupOverlay = new PopupOverlayMock();
            var popup = new PopupView({ overlayView: popupOverlay, context: { content: "<div id='temp'></div>"} });
            popup.show();

            equal($(testBenchId + " div.popup").is(":visible"), true, "div.popup visible test");
            equal(popupOverlay.allHidden, true, "overlay mock all items was hidden test");
        });

        asyncTest("OK click async test", function () {
            var popupOverlay = new PopupOverlayMock();
            var popup = new PopupView({
                overlayView: popupOverlay,
                okClick: function (sender) {
                    equal(sender, popup, "ok click was called");
                }
            });

            var btn = $(testBenchId + " div.popup div#popup_controls input#popup_ok")

            btn.trigger('click');

            setTimeout(function () {
                start();
            }, 100);
        });

        asyncTest("Cancel click async test", function () {
            var popupOverlay = new PopupOverlayMock();
            var popup = new PopupView({
                overlayView: popupOverlay,
                cancelClick: function (sender) {
                    equal(sender,popup,"cancel click was called");
                }
            });

            var btn = $(testBenchId + " div.popup div#popup_controls input#popup_cancel")
            btn.trigger('click');

            setTimeout(function () {
                start();
            }, 100);
        });

    };

    parent.PopupViewTests = PopupViewTests;
    return parent;

} (Editor.Views.Test || {}));