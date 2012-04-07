// Use this as a quick template for future modules
define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
    /**
    * Base class for graphics elements
    */
    var GraphicsView = Backbone.View.extend({

        setDefaults: function () {
            /// <summary>
            /// Sets default values
            /// </summary>
            this.x = 0;
            this.y = 0;
            this.width = 1;
            this.height = 1;
            this.color = 'black';
            this.opacity = 0.5;
            this.BorderThickness = 1;
            this.BorderColor = 'black';
            this.BorderOpacity = 1;
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
            /// {width, height} - set element size
            /// {color, opacity} set fill parameters
            /// {borderColor,borderOpacity} set border lines parameters
            /// {borderThickness} set border lines width
            /// </param>

            if (typeof attr == 'undefined') {
                return;
            }

            if (typeof attr.x != 'undefined') {
                this.x = attr.x;
            }
            if (typeof attr.y != 'undefined') {
                this.y = attr.y;
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
            if (typeof attr.borderThickness != 'undefined') {
                this.borderThickness = attr.borderThickness;
            }
            if (typeof attr.borderColor != 'undefined') {
                this.borderColor = attr.borderColor;
            }
            if (typeof attr.borderOpacaity != 'undefined') {
                this.borderOpacity = attr.borderOpcaity;
            }
            this.render();
        },

        renderTo: function (paper) {
            // child class should override this
        },

        render: function () {
            /// <summary>
            /// Renders rectangle on stored this._paper if it exists
            /// </summary>

            this.renderTo(this._paper);
        }
    });
    return GraphicsView;
});