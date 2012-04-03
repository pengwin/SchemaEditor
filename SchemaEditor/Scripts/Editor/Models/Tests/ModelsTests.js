Editor.Models.Test = (function (parent) {

    var runTests = function () {
        Editor.Models.Test.BlueprintModelTests();
        Editor.Models.Test.BlueprintStyleModelTests();
    };

    parent.runTests = runTests;
    return parent;
} (Editor.Models.Test || {}));