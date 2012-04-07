// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
    paths: {
        // Major libraries
        jquery: '../Lib/jQuery/jquery-1.7.1',
        underscore: '../Lib/Underscore/underscore-amd',
        backbone: '../Lib/Backbone/backbone-amd',
        eve: '../Lib/Raphael/eve',
        raphael: '../Lib/Raphael/raphael',

        // Require.js plugins
        text: '../Lib/require/text',
        order: '../Lib/require/order'

        // Just a short cut so we can put our html outside the js dir
        // When you have HTML/CSS designers this aids in keeping them out of the js directory
        //templates: '../templates'
    }
});

// Let's kick off the application

require([
  'app',
], function (App) {

    $("#blueprint_view").html('');

    var blueprint = new App.Models.Blueprint({
        width: 200,
        height: 200,
        margin: 10,
        gridStep: 20
    });

    var updateBlueprintView = function () {
        $("#blueprint_view").width(blueprint.get('width') + blueprint.get('margin') * 2);
        $("#blueprint_view").height(blueprint.get('height') + blueprint.get('margin') * 2);
    };

    blueprint.on('change', function () {
        updateBlueprintView();
    });

    updateBlueprintView();
    var style = new App.Models.BlueprintStyle({
        borderThickness: 5
    });

    var formFactory = new App.Forms.FormFactory();

    var blueprintForm = formFactory.getFormForModel('Blueprint', blueprint);
    $('body').append(blueprintForm.el);

    var blueprintView = new App.Views.Blueprint({ container: $("#blueprint_view") });

    var gridView = new App.Views.Grid({ blueprint: blueprintView });
    var borderView = new App.Views.Border({ blueprint: blueprintView });

    var blueprintController = new App.Controllers.Blueprint(blueprintView, gridView, borderView, blueprint, style);
    var blueprintFormController = new App.Controllers.FormController(blueprintForm, blueprint);

    var toolsPanel = new App.Views.ToolsPanel();
    $('header').append(toolsPanel.render());

    blueprintView.on('mouseup', function () {

        if (toolsPanel.state.actionEdit) {
            blueprintFormController.showForm();
        }

    });


});