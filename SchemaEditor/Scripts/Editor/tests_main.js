// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
    paths: {
        // Major libraries
        jquery: '../Lib/jQuery/jquery-1.7.1',
        underscore: '../Lib/Underscore/underscore-amd',
        backbone: '../Lib/Backbone/backbone-amd',
        qunit: '../Lib/QUnit/qunit',
        eve: '../Lib/Raphael/eve',
        raphael: '../Lib/Raphael/raphael',

        // Require.js plugins
        text: '../Lib/require/text',
        order: '../Lib/require/order',

        // Just a short cut so we can put our html outside the js dir
        templates: 'templates'
    }
});


require([
  'models/tests/blueprintmodeltest',
  'models/tests/blueprintstylemodeltest',
  'actions/tests/editactiontest',
  'views/graphics/tests/blueprintgraphicstest',
  'views/tests/toolspaneltest',
  'views/forms/tests/formviewtest',
  'widgets/tests/blueprintwidgettest',
  'widgets/tests/rectanglewidgettest',
  'models/tests/rectanglemodeltest'
], function (testBlueprintModel, testBlueprintStyleModel, testEditAction, testBlueprintGraphics, testToolsPanel, testFormView) {
    testBlueprintModel();
    testBlueprintStyleModel();
    
    testEditAction();
    testBlueprintGraphics();
    testToolsPanel();
    testFormView();
    testBlueprintWidget();
    testRectangleWidget();
    testRectangleModel();
});