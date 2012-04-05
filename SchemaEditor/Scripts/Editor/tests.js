// Use this as a quick template for future modules
define([
  'models/tests/blueprinttest',
  'models/tests/blueprintstyletest',
  'views/tests/blueprinttest',
  'views/tests/gridtest',
  'views/tests/bordertest'
], function (testBlueprintModel, testBlueprintStyleModel, testBlueprintView, testGridView,testBorderView) {

    function runModelsTests() {
        testBlueprintModel.call();
        testBlueprintStyleModel();
    };

    function runViewsTests() {
        testBlueprintView();
        testGridView();
        testBorderView();
    };

    return {
        runModelsTests: runModelsTests,
        runViewsTests: runViewsTests
    };
});