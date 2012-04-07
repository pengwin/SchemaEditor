// Use this as a quick template for future modules
define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
    /**
    * Model of Assets styles
    */
    var AssetsStyleModel = Backbone.Model.extend({

        defaults: {
            color: 'white',
            opacity: 'gray',

            borderColor: 'gray',
            borderOpacity: 0.8,
            borderThickness: 1

        },

        initialize: function () {
            /// <summary>
            /// constructor
            /// </summary>

        },

        validate: function (attrs) {
            /// <summary>
            /// Validates model
            /// </summary>
            /// <param name="attrs">changed attributes</param>
            /// <returns type="">error if validation failed</returns>


            if (typeof attrs.borderThickness != 'undefined' && isNaN(attrs.borderThickness)) {
                return "border thickness is Not a Number";
            }
            if (typeof attrs.borderThickness != 'undefined' && isNaN(attrs.borderOpacity)) {
                return "border opacity is Not a Number";
            }
            if (typeof attrs.opacity != 'undefined' && isNaN(attrs.opacity)) {
                return "opacity is Not a Number";
            }

            if (attrs.borderThickness <= 0) {
                return "border thickness should be greater than 0";
            }
            if (attrs.borderOpacity <= 0) {
                return "border opacity be greater than 0";
            }
            if (attrs.opacity <= 0) {
                return "opacity should be greater than 0";
            }
        }
    });
    return AssetsStyleModel;
});