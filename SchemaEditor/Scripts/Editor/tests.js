// Use this as a quick template for future modules
define([
  'models/tests/blueprinttest'
], function (testBlueprintModel) {

    function runModelsTests() {
        testBlueprintModel();
    };

    return {
        runModelsTests: runModelsTests
    };
});