// Use this as a quick template for future modules
define([
  'jquery',
  'underscore',
  'backbone',
], function ($, _, Backbone) {

    /**
    * Model of rectangle block
    */
    var RectangleModel = Backbone.Model.extend({

        defaults: {
            x: 0,
            y: 0,
            width: 200,
            height: 200,
            xLeftLimit: 0,
            xRightLimit: 100,
            yTopLimit: 0,
            yBottomtLimit: 100
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

            if (typeof attrs.width != 'undefined' && isNaN(attrs.width)) {
                return "width is Not a Number";
            }

            if (typeof attrs.height != 'undefined' && isNaN(attrs.height)) {
                return "height is Not a Number";
            }

            if (typeof attrs.x != 'undefined' && isNaN(attrs.x)) {
                return "x is Not a Number";
            }

            if (typeof attrs.y != 'undefined' && isNaN(attrs.y)) {
                return "x is Not a Number";
            }

            if (typeof attrs.xLeftLimit != 'undefined' && isNaN(attrs.xLeftLimit)) {
                return "x left limit is Not a Number";
            }

            if (typeof attrs.yTopLimit != 'undefined' && isNaN(attrs.yTopLimit)) {
                return "y top limit is Not a Number";
            }

            if (typeof attrs.xRightLimit != 'undefined' && isNaN(attrs.xRightLimit)) {
                return "x right limit is Not a Number";
            }

            if (typeof attrs.yBottomLimit != 'undefined' && isNaN(attrs.yBottomLimit)) {
                return "y bottom limit is Not a Number";
            }

            // check horizontal parameters
            
            if (attrs.x <= this.get('xLeftLimit')) {
                return "left border out of bound ";
            }

            if (this.get('x') + attrs.width > this.get('xRightLimit')) {
                return "right border out of bound ";
            }

            if (attrs.width <= 0) {
                return "width should be greater than 0";
            }
            
            // check vertical parameters
            
            if (attrs.y <= this.get('yTopLimit')) {
                return "top border out of bound ";
            }

            if (this.get('y') + attrs.height > this.get('yBottomLimit')) {
                return "bottom border out of bound ";
            }

            if (attrs.height <= 0) {
                return "height should be greater than 0";
            }
            
        }
    });
    return RectangleModel;
});