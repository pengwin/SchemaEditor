Editor.Controllers.Test = (function (parent) {

    var runTests = function () {
        Editor.Controllers.Test.BlueprintFormControllerTests();
        Editor.Controllers.Test.BlueprintGraphicsControllerTests();
    };

    parent.runTests = runTests;
    return parent;
} (Editor.Controllers.Test || {}));