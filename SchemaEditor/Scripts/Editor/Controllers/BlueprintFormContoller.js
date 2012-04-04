Editor.Controllers = (function (parent) {

    var BlueprintFormController = function (formView, model) {
        /// <summary>
        /// Class links BlueprintFromView and BlueprintModel
        /// </summary>
        /// <param name="formView">instance of BlueprintFromView</param>
        /// <param name="model">instance of BlueprintModel</param>

        this.model = model;
        this.formView = formView;

        var self = this; // alias

        this.modelError = function (model, error) {
            /// <summary>
            /// Callback called then model validation is failed
            /// </summary>
            /// <param name="model"></param>
            /// <param name="error"></param>

            self.formView.putMessage("Error: " + error);
        };

        this.modelChanged = function () {
            /// <summary>
            /// Callback called then model has changed state
            /// </summary>

            self.updateView();
            self.formView.hide();
            self.model.off('change', self.modelChanged);
            self.model.off('error', self.modelError);
        };

        this.formOkClick = function () {
            /// <summary>
            /// Form Ok button click handler
            /// </summary>

            self.updateModel();
        };
    };

    BlueprintFormController.prototype.showForm = function () {
        /// <summary>
        /// Shows form and set model callbacks
        /// </summary>

        this.updateView();

        this.model.on('error', this.modelError);
        this.model.on('change', this.modelChanged);
        this.formView.okClick = this.formOkClick;

        this.formView.show();
    };

    BlueprintFormController.prototype.updateView = function () {
        /// <summary>
        /// Updates view with data from model
        /// </summary>
        var data = this.model.toJSON();
        this.formView.putMessage('');
        this.formView.fillData(data);
    };

    BlueprintFormController.prototype.updateModel = function () {
        /// <summary>
        /// Try to update model with data from view
        /// </summary>
        var data = this.formView.fetchData();
        this.model.set(data);
    };

    parent.BlueprintFormController = BlueprintFormController;
    return parent;

} (Editor.Controllers || {}));