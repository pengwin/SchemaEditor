// Use this as a quick template for future modules
define([
  'models/tests/blueprinttest',
  'models/tests/blueprintstyletest',
  'views/tests/blueprinttest',
], function (testBlueprintModel, testBlueprintStyleModel,testBlueprintView) {

    function runModelsTests() {
        testBlueprintModel.call();
        testBlueprintStyleModel();
    };

    function runViewsTests() {
        testBlueprintView();
    };

    return {
        runModelsTests: runModelsTests,
        runViewsTests: runViewsTests
    };
});