
define([
  'jquery',
  'underscore',
  'backbone',
   'models/models',
   'views/views',
   'actions/actions'
], function ($, _, Backbone, Models, Views, Actions) {

    var RectangleWidget = function (view, actionsState) {
        /// <summary>
        /// Class represents rectangle widget
        /// Encapsulates models,view and from creation
        /// And provides public interface to it
        /// </summary>
        /// <param name="blueprint">blueprint widget</param>
        /// <param name="actionsState">current actions state</param>

        this.actionsState = actionsState;

        this._initModels();
        this._initView(view);
        this._initForms();
        this._initActions();
        this._bindEvents();
    };

    RectangleWidget.prototype._initModels = function () {
        this.model = new Models.RectangleModel({
            x: 0,
            y: 0,
            width: 1,
            height: 1
        });
    };

    RectangleWidget.prototype._initForms = function () {
        this.form = new Views.Forms.FormView();
        this.form.render('Edit Rectangle', this.model.toJSON(), ['xLeftLimit', 'xRightLimit', 'yTopLimit', 'yBottomtLimit']);
    };

    RectangleWidget.prototype._initActions = function () {
        this.editAction = new Actions.EditAction(this.form, this.model);
        this.moveAction = new Actions.MoveAction(this.model);
        this.deleteAction = new Actions.DeleteAction(this.model);
    };

    RectangleWidget.prototype._initView = function (view) {

        this.view = view;
    };

    RectangleWidget.prototype._bindEvents = function () {

        var self = this;

        _.extend(this, Backbone.Events);

        this.model.on('change', function () {
            self.update();
        });

        this.model.on('destroy', function () {
            self.trigger('remove', self);
        });

        this.view.on('mouseup', function (sender, curPos) {
            if (self.actionsState.actionEdit) {
                self.editAction.execute();
            }
            if (self.actionsState.actionMove) {
                self.moveAction.execute();
            }
            if (self.actionsState.actionDelete) {
                self.deleteAction.execute();
            }
        });

        this.view.on('mousemove', function (sender, curPos) {
            if (self.actionsState.actionMove) {
                self.moveAction.setPosition(curPos);
            }
        });

        this.view.on('mouseover', function (sender, curPos) {
            if (self.actionsState.actionEdit || self.actionsState.actionMove || self.actionsState.actionDelete) {
                self.view.set({ opacity: self.view.opacity / 1.5 });
                self.view.update();
            }
        });

        this.view.on('mouseout', function (sender, curPos) {
            if (self.actionsState.actionEdit || self.actionsState.actionMove || self.actionsState.actionDelete) {
                self.view.set({ opacity: self.view.opacity * 1.5 });
                self.view.update();
            }
        });
    };

    RectangleWidget.prototype.update = function () {
        /// <summary>
        /// Updates view
        /// </summary>

        var data = this.model.toJSON();
        this.view.set(data);
        this.view.update();
    };

    RectangleWidget.prototype.remove = function () {
        /// <summary>
        /// Updates view
        /// </summary>

        var data = this.model.toJSON();
        this.view.set(data);
        this.view.update();
    };

    return RectangleWidget;
});