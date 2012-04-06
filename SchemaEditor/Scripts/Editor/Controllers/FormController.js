// Use this as a quick template for future modules
define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
    var FormController = function (formView, model) {
        /// <summary>
        /// Links form and model
        /// handles form button click events and model change event
        /// </summary>

        this.formView = formView;
        this.model = model;

        var self = this;

        this._errorOccured = false;

        // model error handler
        this.model.on('error', function (model, error) {
            self.formView.message('Error: ' + error);
            self._errorOccured = true;
        });

        // model change handler
        this.model.on('change', function () {
            var data = self.model.toJSON();
            self.formView.update(data);
            self.formView.hide();
        });

        // form submit ok handler
        this.formView.submitButton.click(function () {
            var data = self.formView.fetch();
            self.model.set(data);
            if (!self.model.hasChanged() && !self._errorOccured) {
                self.formView.hide();
            }
        });

        // form submit cancel handler
        this.formView.cancelButton.click(function () {
            self.formView.hide();
        });

    };

    FormController.prototype.showForm = function () {
    	/// <summary>
    	/// Shows linked form
        /// </summary>
        
        this.formView.message('');
        this._errorOccured = false;
        this.formView.show();
    };

    return FormController;
});