
define([], function ($, _, Backbone) {
    var GraphicsController = function (graphicsView, model, styleModel) {
        /// <summary>
        /// Base class for controllers for graphics elements 
        /// Class links graphics views with models changes (blueprint model, blueprint style model) 
        /// </summary>
        /// <param name="blueprintView"></param>
        /// <param name="gridView"></param>
        /// <param name="borderView"></param>
        /// <param name="model"></param>
        /// <param name="styleModel"></param>

        this.model = model;
        this.style = styleModel;

        this.graphicsView = graphicsView;

        this.updateView(); // first synchronization views with models

        var self = this; // alias

        this.modelChanged = function () {
            /// <summary>
            /// Callback called then model has changed state
            /// </summary>

            self.updateView();
        };

        this.model.on('change', this.modelChanged);
        this.style.on('change', this.modelChanged);

    };

    GraphicsController.prototype.updateView = function () {
        /// <summary>
        /// Updates view with data from model
        /// </summary>
        var data = this.model.toJSON();
        var style = this.style.toJSON();

        var graphicsViewData = {
            x: data.x,
            y: data.y,
            width: data.width,
            height: data.height,
            color: style.color,
            opacity: style.opacity,
            borderColor: style.borderColor,
            borderOpacity: style.borderOpacity,
            borderThickness: style.borderThickness
        };

        this.graphicsView.set(graphicsViewData);
    };

    return GraphicsController;
});