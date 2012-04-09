

define([
  'models/models',
  'views/views',
  'widgets/widgets',
  'actions/actions'
], function (Models, Views, Widgets, Actions) {

    var App = {

        initTools: function () {
            this.tools = new Views.ToolsPanel();
            $('header').append(this.tools.el);
        },

        initBlueprint: function () {
            $("#blueprint_stub").remove();

            this.blueprintWidget = new Widgets.BlueprintWidget(this.tools.state);
            this.blueprintWidget.model.set({
                width: 300,
                height: 300,
                padding: 20,
                gridStep: 20
            });

            this.blueprintWidget.renderOn("section#content");
        },

        initialize: function () {
            /// <summary>
            /// Sets page to initial state
            /// </summary>

            this.initTools();
            this.initBlueprint();
            //this.bindEvents();

        },

        start: function () {
            /*this.updateBlueprint();
            this.blueprintFormController.showForm();*/
        }

    };

    return App;
});