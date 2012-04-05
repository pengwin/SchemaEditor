// Use this as a quick template for future modules
define([
  'models/tests/blueprinttest',
  'models/tests/blueprintstyletest',
  'views/tests/blueprinttest',
  'views/tests/gridtest',
  'views/tests/bordertest',
  'controllers/tests/blueprinttest'
], function (testBlueprintModel, testBlueprintStyleModel, testBlueprintView, testGridView, testBorderView, testBlueprintController) {

    function runModelsTests() {
        testBlueprintModel.call();
        testBlueprintStyleModel();
    };

    function runViewsTests() {
        testBlueprintView();
        testGridView();
        testBorderView();
    };

    function runControllersTests() {
        testBlueprintController();
    };

    return {
        runModelsTests: runModelsTests,
        runViewsTests: runViewsTests,
        runControllersTests: runControllersTests
    };
});