Editor.Views = (function (parent) {

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
            /// {blueprint} blueprint to write
            /// {width,height} set border size
            /// {color,opacity} set border lines parameters
            /// {line_thickness} set border lines width
            /// </param>

            this.setDefaults();

            if (!attr || !attr.blueprintView) {
                throw { message: 'attribute \'blueprintView\' is not set' };
            }

            this._paper = attr.blueprintView._paper;

            if (attr) {
                this.set(attr);
            }
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
            if (!attr) {
                return;
            }
            if (attr.step) {
                this.step = attr.step;
            }
            if (attr.width) {
                this.width = attr.width;
            }
            if (attr.height) {
                this.height = attr.height;
            }
            if (attr.color) {
                this.color = attr.color;
            }
            if (attr.opacity) {
                this.opacity = attr.opacity;
            }
            if (attr.line_thickness) {
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
            if (this._paper) {
                this.renderTo(this._paper);
            }
        }
    });

    parent.BorderView = BorderView;
    return parent;
} (Editor.Views || {}));