// Use this as a quick template for future modules
define([
  'jquery',
  'underscore',
  'backbone',
  'views/graphics'
], function ($, _, Backbone,GraphicsView) {
    /**
    * Ellipse element
    */
    var EllipseView = GraphicsView.extend({

        renderTo: function (paper) {
            /// <summary>
            /// Renders rectangle on raphael paper
            /// </summary>
            /// <param name="paper">Raphael.paper</param>
            if (this._ellipse) {
                this._ellipse.remove();
            }
            this._ellipse = paper.rect(this.x + this.width / 2, this.y + this.height / 2, this.width / 2, this.height / 2);
            this._ellipse.attr("fill", this.color);
            this._ellipse.attr("fill-opacity", this.opacity);
            this._ellipse.attr('stroke', this.borderColor);
            this._ellipse.attr('stroke-opacity', this.borderOpacity);
            this._ellipse.attr('stroke-width', this.borderThickness);
            
        }

    });
    return EllipseView;
});