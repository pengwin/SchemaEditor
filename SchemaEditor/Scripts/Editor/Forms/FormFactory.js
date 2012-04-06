
define([
  'jquery',
  'underscore',
  'forms/formview'
], function ($, _, FormView) {
    /**
    * Instantiates form view based on target model
    */
    var FormFactory = function () {
    	/// <summary>
    	/// Constructor
        /// </summary>
        
        this._forms = {};
    };

    FormFactory.prototype.getFormForModel = function (formCaption, model) {
    	/// <summary>
    	/// Gets form with caption and fields according to model attributes
    	/// </summary>
    	/// <param name="formCaption">form caption</param>
    	/// <param name="model">model for form generation</param>
        /// <returns type="">form model instance</returns>
        
        if (typeof model.cid == 'undefined') {
            throw { message: "model isn't valid " };
        }
        var id = model.cid;
        if (typeof this._forms[id] == 'undefined') {
            this._forms[id] = new FormView();
        }
        this._forms[id].render(formCaption + " #" + id, model.attributes);
        return this._forms[id];
    };

    return FormFactory;
});