// Use this as a quick template for future modules
define([
  'jquery',
  'underscore',
  'backbone',
], function ($, _, Backbone) {
    /**
    *  Grid width square cells
    */
    var GridView = Backbone.View.extend({

        setDefaults: function () {
            /// <summary>
            /// Sets default values
            /// </summary>

            this.width = 1;
            this.height = 1;
            this.color = 'black';
            this.opacity = 0.5;
            this.line_thickness = 1;
        },

        initialize: function (attr) {
            /// <summary>
            /// Constructor
            /// </summary>
            /// <param name="attr">
            /// dictionary with params
            /// {width,height} set grid size
            /// {color,opacity} set grid lines parameters
            /// {line_thickness} set grid lines width
            /// {step} size of side of grid cell
            /// </param>

            if (typeof attr == 'undefined' || typeof attr.blueprint == 'undefined') {
                throw { message: "attribute: 'blueprint' is not set" };
            }

            this._paper = attr.blueprint._paper;

            this.setDefaults();

            this.set(attr);
        },

        set: function (attr) {
            /// <summary>
            /// Sets grid attributes
            /// </summary>
            /// <param name="attr">
            /// dictionary with params
            /// {width, height} - set grid size
            /// {step} size of side of grid cell
            /// {color,opacity} set grid lines parameters
            /// {line_thickness} set grid lines width
            /// </param>

            if (typeof attr == 'undefined') {
                return;
            }
            if (typeof attr.step != 'undefined') {
                this.step = attr.step;
            }
            if (typeof attr.width != 'undefined') {
                this.width = attr.width;
            }
            if (typeof attr.height != 'undefined') {
                this.height = attr.height;
            }
            if (typeof attr.color != 'undefined') {
                this.color = attr.color;
            }
            if (typeof attr.opacity != 'undefined') {
                this.opacity = attr.opacity;
            }
            if (typeof attr.line_thickness != 'undefined') {
                this.line_thickness = attr.line_thickness;
            }
            this.render();
        },

        renderTo: function (paper) {
            /// <summary>
            /// Renders grid on raphael paper
            /// </summary>
            /// <param name="paper"></param>

            if (this._path) {
                this._path.remove();
            }
            var str = "";
            // adds vertical lines
            for (var i = 0; i <= this.width; i += this.step) {
                str += "M" + i + " " + 0 + "L" + i + " " + this.height;
            }
            // adds horizontal lines
            for (var j = 0; j <= this.height; j += this.step) {
                str += "M" + 0 + " " + j + "L" + this.height + " " + j;
            }
            this._path = paper.path(str);
            this._path.attr('stroke', this.color);
            this._path.attr('stroke-opacity', this.opacity);
            this._path.attr('stroke-width', this.line_thickness);
            $(this._path.node).attr('id', 'grid');
            this._paper = paper; // store paper for this.render function
        },


        render: function () {
            /// <summary>
            /// Renders grid on stored this._paper if it exists
            /// </summary>

            this.renderTo(this._paper);
        }
    });
    return GridView;
});