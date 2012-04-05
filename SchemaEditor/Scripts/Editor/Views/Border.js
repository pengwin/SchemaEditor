// Use this as a quick template for future modules
define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
    /**
    * Blueprint rectangle border
    */
    var BorderView = Backbone.View.extend({

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
            /// dictionary with params:
            /// {width,height} set border size
            /// {color,opacity} set border lines parameters
            /// {line_thickness} set border lines width
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
            /// Sets border attributes
            /// </summary>
            /// <param name="attr">
            /// dictionary with params:
            /// {width, height} - set border size
            /// {step} size of side of border cell
            /// {color,opacity} set border lines parameters
            /// {line_thickness} set border lines width
            /// </param>
            
            if (typeof attr == 'undefined') {
                return;
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
            /// Renders border on raphael paper
            /// </summary>
            /// <param name="paper">Raphael.paper</param>
            if (this._rect) {
                this._rect.remove();
            }
            this._rect = paper.rect(0, 0, this.width, this.height);
            this._rect.attr("fill-opacity", 0.0);
            this._rect.attr('stroke', this.color);
            this._rect.attr('stroke-opacity', this.opacity);
            this._rect.attr('stroke-width', this.line_thickness);
            $(this._rect.node).attr('id', 'border');
            this._paper = paper; // store paper for this.render function
        },

        render: function () {
            /// <summary>
            /// Renders grid on stored this._paper if it exists
            /// </summary>
            
            this.renderTo(this._paper);
        }
    });
    return BorderView;
});