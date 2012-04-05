// Use this as a quick template for future modules
define([
  'models/tests/blueprinttest',
  'models/tests/blueprintstyletest',
  'views/tests/blueprinttest',
  'views/tests/gridtest',
], function (testBlueprintModel, testBlueprintStyleModel, testBlueprintView, testGridView) {

    function runModelsTests() {
        testBlueprintModel.call();
        testBlueprintStyleModel();
    };

    function runViewsTests() {
        testBlueprintView();
        testGridView();
    };

    return {
        runModelsTests: runModelsTests,
        runViewsTests: runViewsTests
    };
});