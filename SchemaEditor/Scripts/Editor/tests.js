// Use this as a quick template for future modules
define([
  'models/tests/blueprinttest',
  'models/tests/blueprintstyletest',
  'views/tests/blueprinttest',
  'views/tests/gridtest',
  'views/tests/bordertest',
  'controllers/tests/blueprinttest',
  'controllers/tests/formcontrollertest',
  'forms/tests/formfactorytest',
  'forms/tests/formviewtest'

], function (testBlueprintModel, testBlueprintStyleModel, testBlueprintView, testGridView, testBorderView, testBlueprintController,testFormController, testFormFactory, testFormView) {

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
        testFormController();
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