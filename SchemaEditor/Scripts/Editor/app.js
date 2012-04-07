

define([
  'models/models',
  'views/views',
  'controllers/controllers',
  'forms/forms'
], function (Models, Views, Controllers, Forms) {

    var App = {
        Models: Models,
        Views: Views,
        Controllers: Controllers,
        Forms: Forms,

        initBlueprint: function () {
            // remove stub message
            $("#blueprint_view").html('');

            // init models
            this.blueprintModel = new Models.Blueprint({
                width: 200,
                height: 200,
                margin: 10,
                gridStep: 20
            });
            this.styleModel = new Models.BlueprintStyle({
                borderThickness: 5
            });

            // init form
            this.formFactory = new Forms.FormFactory();
            this.blueprintForm = this.formFactory.getFormForModel('Edit Blueprint', this.blueprintModel);
            $('body').append(this.blueprintForm.el);
            this.blueprintFormController = new Controllers.FormController(this.blueprintForm, this.blueprintModel);

            // init view
            this.blueprintView = new Views.Blueprint({ container: $("#blueprint_view") });
            this.gridView = new Views.Grid({ blueprint: this.blueprintView });
            this.borderView = new Views.Border({ blueprint: this.blueprintView });
            this.blueprintController = new Controllers.Blueprint(this.blueprintView, this.gridView, this.borderView, this.blueprintModel, this.styleModel);

        },

        initToolsPanel: function () {

            this.toolsPanel = new Views.ToolsPanel();
            $('header').append(this.toolsPanel.render());

        },

        updateBlueprintView: function () {

            $("#blueprint_view").width(this.blueprintModel.get('width') + this.blueprintModel.get('margin') * 2);
            $("#blueprint_view").height(this.blueprintModel.get('height') + this.blueprintModel.get('margin') * 2);
        },

        blueprintMouseUpHandler: function () {
            if (this.toolsPanel.state.actionEdit) {
                this.blueprintFormController.showForm();
            }
        },

        bindHandlers: function () {

            var self = this;
            this.blueprintModel.on('change', function () {
                self.updateBlueprintView();
            });

            this.blueprintView.on('mouseup', function () {
                self.blueprintMouseUpHandler();
            });

        },

        initialize: function () {
            /// <summary>
            /// Sets page to initial state
            /// </summary>

            this.initBlueprint();
            this.initToolsPanel();
            this.updateBlueprintView();
            this.bindHandlers();
        },

        start: function () {
            this.blueprintFormController.showForm();
        }

    };

    return App;
});