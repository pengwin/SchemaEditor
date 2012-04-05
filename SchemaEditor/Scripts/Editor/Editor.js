$(document).ready(function () {

    var popupOverlay = new Editor.Views.PopupOverlayView();

    var blueprint = new Editor.Models.BlueprintModel({
        width: 500,
        height: 500,
        margin: 20
    });

    var style = new Editor.Models.BlueprintStyleModel({
        backColor: 'black',
        borderOpacity: 1.0,
        gridOpacity: 0.8
    });

    var blueprintForm = new Editor.Views.BlueprintFormView({ overlayView: popupOverlay });

    var blueprintView = new Editor.Views.BlueprintView({ container: $("#blueprint_view") });
    var gridView = new Editor.Views.GridView({ blueprintView: blueprintView });
    var borderView = new Editor.Views.BorderView({ blueprintView: blueprintView });

    var blueprintFormController = new Editor.Controllers.BlueprintFormController(blueprintForm, blueprint);
    //var blueprintController = new Editor.Controllers.BlueprintGraphicsController(blueprintView, gridView, borderView, blueprint, style);

    blueprintFormController.showForm();
});