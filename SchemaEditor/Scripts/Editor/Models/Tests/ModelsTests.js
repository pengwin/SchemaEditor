Editor.Models.Test = (function (parent) {

    var runTests = function () {
        Editor.Models.Test.BlueprintModelsTests();
    };

    parent.runTests = runTests;
    return parent;
} (Editor.Models.Test || {}));