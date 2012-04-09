// Use this as a quick template for future modules
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/tools.htm'
], function ($, _, Backbone, tools_template) {

    // encapsulates work with checkboxes which represents actions
    // field state represents the object with checkboxes checked states
    var ToolsPanel = Backbone.View.extend({

        initialize: function () {
            /// <summary>
            /// Constructor
            /// </summary>

            this.state = {
                actionEdit: false,
                actionMove: false,
                actionDelete: false,
                drawRect: false,
                drawCircle: false
            };
            this.render();
        },

        render: function () {
            /// <summary>
            /// Renders tools
            /// </summary>
            /// <param name="caption"></param>
            /// <param name="attrs"></param>

            this.el = this.make("ul", { id: "tools", class: "actions_block" });
            var context = {};
            var compiledTemplate = _.template(tools_template, context);
            $(this.el).html(compiledTemplate);

            this._actionEdit = $("input[name='tool']#action_edit", this.el);
            this._actionMove = $("input[name='tool']#action_move", this.el);
            this._actionDelete = $("input[name='tool']#action_delete", this.el);
            this._drawRect = $("input[name='tool']#draw_rect", this.el);
            this._drawCircle = $("input[name='tool']#draw_rect", this.el);

            var self = this;
            var clickHandler = function () {
                self.refreshState();
            };

            this._actionEdit.change(clickHandler);
            this._actionMove.change(clickHandler);
            this._actionDelete.change(clickHandler);
            this._drawRect.change(clickHandler);
            this._drawCircle.change(clickHandler);

            return this.el;
        },

        refreshState: function () {
            /// <summary>
            /// Refreshes state object
            /// </summary>

            this.state.actionEdit = this._actionEdit.is(':checked');
            this.state.actionMove = this._actionMove.is(':checked');
            this.state.actionDelete = this._actionDelete.is(':checked');
            this.state.drawRect = this._drawRect.is(':checked');
            this.state.drawCircle = this._drawCircle.is(':checked');
        }

    });
    return ToolsPanel;
});