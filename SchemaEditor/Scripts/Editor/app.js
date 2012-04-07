

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

            this.curPos = { x: 0, y: 0 };
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

            this.assetsStyleModel = new Models.AssetsStyle({

            });

            // init form
            this.formFactory = new Forms.FormFactory();
            this.blueprintForm = this.formFactory.getFormForModel('Edit Blueprint', this.blueprintModel, ['widthLimit', 'heightLimit']);
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

        blueprintMouseDownHandler: function () {
            if (this.toolsPanel.state.drawRect) {
                var rectangleModel = new Models.Rectangle({ x: this.curPos.x - $("#blueprint svg").offset().left, y: this.curPos.y - $("#blueprint svg").offset().top, width: 10, height: 10 });
                var rectangleView = new Views.Rectangle({ blueprint: this.blueprintView });
                var rectangleController = new Controllers.Graphics(rectangleView, rectangleModel, this.assetsStyleModel);
                
            }
        },

        blueprintMouseMoveHandler: function (sender, curPos) {
            this.curPos = curPos;
            if (this.toolsPanel.state.actionEdit) {

            }
        },

        bindHandlers: function () {

            var self = this;
            this.blueprintModel.on('change', function () {
                self.updateBlueprintView();
            });

            this.blueprintView.on('mousedown', function () {
                self.blueprintMouseUpHandler();
            });

            this.blueprintView.on('mouseup', function () {
                self.blueprintMouseDownHandler();
            });


            this.blueprintView.on('mousemove', function (sender, curPos) {
                self.blueprintMouseMoveHandler(sender, curPos);
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