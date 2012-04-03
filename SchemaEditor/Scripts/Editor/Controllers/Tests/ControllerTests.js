Editor.Controllers.Test = (function (parent) {

    var runTests = function () {
        Editor.Controllers.Test.BlueprintControllerTests();
    };

    parent.runTests = runTests;
    return parent;
} (Editor.Controllers.Test || {}));