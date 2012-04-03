Editor.Views.Test = (function (parent) {

    var runTests = function () {
        Editor.Views.Test.BlueprintViewTests();
        Editor.Views.Test.GridViewTests();
        Editor.Views.Test.BorderViewTests();
        Editor.Views.Test.PopupOverlayViewTests();
        Editor.Views.Test.PopupViewTests();
        Editor.Views.Test.BlueprintFormViewTests();
    };

    parent.runTests = runTests;
    return parent;
} (Editor.Views.Test || {}));