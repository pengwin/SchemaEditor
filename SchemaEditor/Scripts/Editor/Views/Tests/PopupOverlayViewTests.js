Editor.Views.Test = (function (parent) {

    var PopupOverlayViewTests = function () {

        var PopupOverlayView = Editor.Views.PopupOverlayView; // alias

        var SubPopupMock = function () {
            this.el = "";
            this.hidden = false;
            this.hide = function () { this.hidden = true; };
        };

        module("PopupOverlayView Tests", {
            setup: function () {

            },
            teardown: function () {
                $("body div.popup__overlay").remove();
            }
        });

        test("constructor tests", function () {
            var popupOverlay = new PopupOverlayView();

            equal($("body div.popup__overlay").length, 1, "div.popup__overlay quantity test");

            var secondOverlay = new PopupOverlayView();

            equal($("body div.popup__overlay").length, 1, "div.popup__overlay single instance test");
        });

        test("show tests", function () {
            var popupOverlay = new PopupOverlayView();
            popupOverlay.show();

            equal($("body div.popup__overlay").css('display'), 'block', "div.popup__overlay css attribute display test");
        });

        test("hide tests", function () {
            var popupOverlay = new PopupOverlayView();
            popupOverlay.show();
            popupOverlay.hide();

            equal($("body div.popup__overlay").css('display'), 'none', "div.popup__overlay css attribute display test");
        });

        test("addSubPopup tests", function () {
            var popupOverlay = new PopupOverlayView();

            var subPopup1 = new SubPopupMock();
            var subPopup2 = new SubPopupMock();

            popupOverlay.addSubPopup(subPopup1);
            popupOverlay.addSubPopup(subPopup2);

            equal(popupOverlay.popups.length, 2, "popups array length test");
        });

        test("hideAllSubPopups tests", function () {
            var popupOverlay = new PopupOverlayView();

            var subPopup1 = new SubPopupMock();
            var subPopup2 = new SubPopupMock();

            popupOverlay.addSubPopup(subPopup1);
            popupOverlay.addSubPopup(subPopup2);

            popupOverlay.hideAllSubPopups();

            equal(subPopup1.hidden, true, "subPopup1 hidden test");
            equal(subPopup2.hidden, true, "subPopup2 hidden test");
        });
    };

    parent.PopupOverlayViewTests = PopupOverlayViewTests;
    return parent;

} (Editor.Views.Test || {}));