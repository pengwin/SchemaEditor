Editor.Controllers = (function (parent) {

    var BlueprintGraphicsController = function (blueprintView, gridView, borderView, model, styleModel) {
        /// <summary>
        /// Class links graphics views(blueprint view, grid view, border view) with models changes (blueprint model, blueprint style) 
        /// </summary>
        /// <param name="blueprintView"></param>
        /// <param name="gridView"></param>
        /// <param name="borderView"></param>
        /// <param name="model"></param>
        /// <param name="styleModel"></param>

        this.model = model;
        this.style = styleModel;

        this.blueprintView = blueprintView;
        this.gridView = gridView;
        this.borderView = borderView;

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

    BlueprintGraphicsController.prototype.updateView = function () {
        /// <summary>
        /// Updates view with data from model
        /// </summary>
        var data = this.model.toJSON();
        var style = this.style.toJSON();

        var blueprintDTO = {
            width: data.width,
            height: data.height,
            color: style.backColor,
            padding: data.margin
        };

        var gridDTO = {
            step: data.gridStep,
            width: data.width,
            height: data.height,
            color: style.gridColor,
            opacity: style.gridOpacity,
            line_thickness: style.gridThickness
        };

        var borderDTO = {
            width: data.width,
            height: data.height,
            color: style.borderColor,
            opacity: style.borderOpacity,
            line_thickness: style.borderThickness
        };

        this.blueprintView.set(blueprintDTO);
        this.gridView.set(gridDTO);
        this.borderView.set(borderDTO);
    };

    parent.BlueprintGraphicsController = BlueprintGraphicsController;
    return parent;

} (Editor.Controllers || {}));