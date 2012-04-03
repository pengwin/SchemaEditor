Editor.Controllers = (function (parent) {
    var BlueprintController = function (formView, model) {
    	/// <summary>
    	/// Class links BlueprintFromView and BlueprintModel
    	/// </summary>
        /// <param name="formView">instance of BlueprintFromView</param>
        /// <param name="model">instance of BlueprintModel</param>

        this.model = model;
        this.formView = formView;

        var instance = this;

        this.model.on('change', function () {
            instance.updateView();
        });

        this.formView.okClick = function (sender) {
            var data = sender.fetchData();
            instance.model.set(data);
        };
    };

    BlueprintController.prototype.updateView = function () {
        var data = this.model.toJSON();
        formView.fillData(data);
    };

    parent.BlueprintController = BlueprintController;
    return parent;
    
} (Editor.Controllers || {}));