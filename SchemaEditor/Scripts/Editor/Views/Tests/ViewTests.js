Editor.Views.Test = (function (parent) {

    var runTests = function () {
        Editor.Views.Test.BlueprintViewTests();
    };

    parent.runTests = runTests;
    return parent;
} (Editor.Views.Test || {}));