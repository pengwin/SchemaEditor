// Use this as a quick template for future modules
define([
  'models/tests/blueprinttest',
  'models/tests/blueprintstyletest',
], function (testBlueprintModel, testBlueprintStyleModel) {

    function runModelsTests() {
        testBlueprintModel();
        testBlueprintStyleModel();
    };

    return {
        runModelsTests: runModelsTests
    };
});