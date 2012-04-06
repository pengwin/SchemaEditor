// Use this as a quick template for future modules
define([
  'models/tests/blueprinttest',
  'models/tests/blueprintstyletest',
  'views/tests/blueprinttest',
  'views/tests/gridtest',
  'views/tests/bordertest',
  'controllers/tests/blueprinttest',
  'forms/tests/formfactorytest',
  'forms/tests/formviewtest'
], function (testBlueprintModel, testBlueprintStyleModel, testBlueprintView, testGridView, testBorderView, testBlueprintController, testFormFactory, testFormView) {

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

    function runFormsTests() {
        testFormFactory();
        testFormView();
    }

    return {
        runModelsTests: runModelsTests,
        runViewsTests: runViewsTests,
        runControllersTests: runControllersTests,
        runFormsTests: runFormsTests
    };
});