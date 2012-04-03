Editor.Controllers.Test = (function (parent) {

    var BlueprintModelMock = function () {

        this.changeIsSet = false;

        this.on = function (event, callback) {
            if (event == 'change') {
                this.changeIsSet = true;
            }
        };
    };

    var BlueprintFormViewMock = function () {

    };

    var BlueprintController = Editor.Controllers.BlueprintController; // alias

    parent.BlueprintControllerTests = function () {

        module('BlueprintController tests');

        test('constructor test', function () {

            var formView = new BlueprintModelMock();
            var model = new BlueprintModelMock();

            var target = new BlueprintController(formView, model);

            equal(model.changeIsSet, true, "model change handler test");
            notEqual(typeof(formView.okClick), 'undefined', "formView okClick handler test");
        });

    };
    return parent;

} (Editor.Controllers.Test || {}));