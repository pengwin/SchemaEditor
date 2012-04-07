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

        // form submit ok handler
        this.formView.submitButton.click(function () {
            var data = self.formView.fetch();
            var error = self.model.validate(data);
            if (error) {
                self.formView.message('Error: ' + error);
            }
            else {
                self.model.set(data);
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
        var data = this.model.toJSON();
        this.formView.update(data);
        this._errorOccured = false;
        this.formView.show();
    };

    return FormController;
});