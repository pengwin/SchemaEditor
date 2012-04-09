// Use this as a quick template for future modules
define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
    /**
    * Model of blueprint styles
    */
    var BlueprintStyleModel = Backbone.Model.extend({

        defaults: {
            backColor: 'white',
            gridColor: 'gray',
            borderColor: 'gray',

            gridThickness: 0.5,
            borderThickness: 1,

            borderOpacity: 0.8,
            gridOpacity: 0.4,

            assetsLineThickness: 4,
            assetsColor: 'black',
            assetsOpacity: 1,
            assetsLineColor: 'black',
            assetsLineOpacity: 1
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

            if (typeof attrs.gridThickness != 'undefined' && isNaN(attrs.gridThickness)) {
                return "grid thickness is Not a Number";
            }
            if (typeof attrs.borderThickness != 'undefined' && isNaN(attrs.borderThickness)) {
                return "border thickness is Not a Number";
            }
            if (typeof attrs.borderOpacity != 'undefined' && isNaN(attrs.borderOpacity)) {
                return "border opacity is Not a Number";
            }
            if (typeof attrs.gridOpacity != 'undefined' && isNaN(attrs.gridOpacity)) {
                return "grid opacity is Not a Number";
            }

            if (attrs.gridThickness <= 0) {
                return "grid thickness should be greater than 0";
            }
            if (attrs.borderThickness <= 0) {
                return "border thickness should be greater than 0";
            }
            if (attrs.borderOpacity <= 0) {
                return "border opacity be greater than 0";
            }
            if (attrs.gridOpacity <= 0) {
                return "grid opacity should be greater than 0";
            }
        }
    });
    return BlueprintStyleModel;
});