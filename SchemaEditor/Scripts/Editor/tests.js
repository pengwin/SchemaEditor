// Use this as a quick template for future modules
define([
  'models/tests/blueprinttest',
  'models/tests/blueprintstyletest',
  'models/tests/rectangletest',
  'views/tests/blueprinttest',
  'views/tests/gridtest',
  'views/tests/bordertest',
  'views/tests/toolspaneltest',
  'views/tests/rectangletest',
  'controllers/tests/blueprinttest',
  'controllers/tests/formcontrollertest',
  'forms/tests/formfactorytest',
  'forms/tests/formviewtest'

], function (testBlueprintModel, testBlueprintStyleModel, testRectangleModel, testBlueprintView, testGridView, testBorderView, testToolsPanelView, testRectangleView, testBlueprintController, testFormController, testFormFactory, testFormView) {

    function runModelsTests() {
        testBlueprintModel.call();
        testBlueprintStyleModel();
        testRectangleModel();
    };

    function runViewsTests() {
        testBlueprintView();
        testGridView();
        testBorderView();
        testToolsPanelView();
        testRectangleView();
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