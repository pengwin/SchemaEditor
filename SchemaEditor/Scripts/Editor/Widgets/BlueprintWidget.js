
define([
  'jquery',
  'underscore',
  'backbone',
   'models/models',
   'views/views',
   'actions/actions',
    'widgets/rectanglewidget'
], function ($, _, Backbone, Models, Views, Actions, RectangleWidget) {

    var BlueprintWidget = function (actionsState) {
        /// <summary>
        /// Class represents a blueprint widget
        /// Encapsulates models,view and from creation
        /// And provides public interface to models and the view
        /// </summary>
        ///<param name="actionsState">state of current actions</param>

        this.actionsState = actionsState;

        this._widgets = [];

        this._initModels();
        this._initView();
        this._initForms();
        this._initActions();
        this._bindEvents();
    };

    BlueprintWidget.prototype._initModels = function () {
        this.model = new Models.BlueprintModel({
            width: 1,
            height: 1,
            padding: 0,
            gridStep: 1
        });
        this.style = new Models.BlueprintStyleModel({
            borderThickness: 3,
            gridOpacity: 0.5,
            gridThickness: 0.5,
            assetsLineThickness: 1,
            assetsColor: 'black',
            assetsOpacity: 0.5,
            assetsLineColor: 'black',
            assetsLineOpacity: 1
        });
    };

    BlueprintWidget.prototype._bindEvents = function () {

        var self = this;

        this.model.on('change', function () {
            self.update();
        });

        this.style.on('change', function () {
            self.update();
        });

        this.view.on('dom:mousemove', function (sender, curPos) {
            self.curPos = curPos;
            self.drawRectAction.setPosition(curPos);
        });

        this.view.on('dom:mouseup', function () {
            if (self.actionsState.drawRect) {
                self.drawRectAction.execute();
            }
        });

        this.view.on('svg:mousedown', function () {
            if (self.actionsState.actionEdit) {
                self.editAction.execute();
            }
        });

    };

    BlueprintWidget.prototype._initActions = function () {
        this.editAction = new Actions.EditAction(this.form, this.model);
        this.drawRectAction = new Actions.DrawRectAction(this);
    };

    BlueprintWidget.prototype._initForms = function () {
        this.form = new Views.Forms.FormView();
        this.form.render('Edit Blueprint', this.model.toJSON(), ['widthLimit', 'heightLimit']);
        $(this.view.el).append(this.form.el);
    };

    BlueprintWidget.prototype._initView = function () {

        this.view = new Views.Graphics.BlueprintGraphics();
    };


    BlueprintWidget.prototype._updateWidgets = function () {
        for (var i = 0; i < this._widgets.length; i++) {
            var widget = this._widgets[i];

            var data = this.model.toJSON();

            widget.model.xRightLimit = data.width;
            widget.model.yBottomLimit = data.height;

            widget.update();
        }
    };

    BlueprintWidget.prototype.update = function () {
        /// <summary>
        /// Updates the view and related rectangles
        /// </summary>

        this._updateWidgets();
        var data = this.model.toJSON();
        var style = this.style.toJSON();
        this.view.set(data);
        this.view.setStyle(style);
    };

    BlueprintWidget.prototype.drawRect = function () {
        /// <summary>
        /// Creates a rectangle widget and place it on the view and add to a models collection
        /// </summary>
        /// <returns type=""></returns>

        var rectView = this.view.drawRectangle();
        var rectangle = new RectangleWidget(rectView, this.actionsState);

        var self = this;
        rectangle.on('remove', function () {
            self.view.removeRectangle(rectView);
            self.removesWidget(rectangle);
        });

        this.addWidget(rectangle);

        return rectangle;
    };

    BlueprintWidget.prototype.addWidget = function (widget) {
        /// <summary>
        /// Puts the widget to the collection.
        /// </summary>
        /// <returns type=""></returns>

        $(this.view.el).append(widget.form.el);
        this._widgets.push(widget);
        this._updateWidgets();
    };

    BlueprintWidget.prototype.removesWidget = function (widget) {
        /// <summary>
        /// Removes the widget from the collection.
        /// </summary>
        /// <returns type=""></returns>

        this._widgets.pop(widget);
        $(widget.form.el).remove();
    };


    BlueprintWidget.prototype.renderOn = function (container) {
        $(container).append(this.view.el);
    };


    return BlueprintWidget;
});