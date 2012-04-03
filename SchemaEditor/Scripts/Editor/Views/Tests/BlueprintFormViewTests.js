Editor.Views.Test = (function (parent) {

    parent.BlueprintFormViewTests = function () {

        var BlueprintFormView = Editor.Views.BlueprintFormView; //alias
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

        module("BlueprintFormView Tests", {
            setup: function () {

            },
            teardown: function () {
                $(testBenchId).html('');
            }
        });

        test("constructor test", function () {
            var overlayView = new PopupOverlayMock();
            var view = new BlueprintFormView({ overlayView: overlayView });

            equal($(testBenchId + " div.popup div#popup_content h3").html(), 'Blueprint', "title test");
            ok('true');
        });

        test("fill data test", function () {
            var overlayView = new PopupOverlayMock();
            var view = new BlueprintFormView({ overlayView: overlayView });

            var data = {
                width: 100,
                height: 100,
                margin: 20,
                gridStep: 10
            };

            view.fillData(data);

            var content = $(testBenchId + " div.popup div#popup_content");

            equal($("#width", content).val(), data.width, "input width test");
            equal($("#height", content).val(), data.height, "input height test");
            equal($("#margin", content).val(), data.margin, "input margin test");
            equal($("#gridStep", content).val(), data.gridStep, "input gridStep test");
        });

        test("fetch data test", function () {
            var overlayView = new PopupOverlayMock();
            var view = new BlueprintFormView({ overlayView: overlayView });

            var expectedData = {
                width: 100,
                height: 100,
                margin: 20,
                gridStep: 10
            };

            var content = $(testBenchId + " div.popup div#popup_content");

            $("#width", content).val(expectedData.width);
            $("#height", content).val(expectedData.height);
            $("#margin", content).val(expectedData.margin);
            $("#gridStep", content).val(expectedData.gridStep);

            var actualData = view.fetchData();

            equal(actualData.width, expectedData.width, "data width test");
            equal(actualData.height, expectedData.height, "data height test");
            equal(actualData.margin, expectedData.margin, "data margin test");
            equal(actualData.gridStep, expectedData.gridStep, "data gridStep test");
        });

    };
    return parent;

} (Editor.Views.Test || {}));