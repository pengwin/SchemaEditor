$(document).ready(function () {
    var template = $("#test_popup_template").html();
    var popup = new Editor.Views.PopupView({ template: template });
    popup.show();
});