﻿Editor.Views.Test = (function (parent) {

    var runTests = function () {
        Editor.Views.Test.BlueprintViewTests();
        Editor.Views.Test.GridViewTests();
    };

    parent.runTests = runTests;
    return parent;
} (Editor.Views.Test || {}));