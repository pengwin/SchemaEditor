// Use this as a quick template for future modules
define([
  'jquery',
  'underscore',
  'backbone',
  'views/graphics'
], function ($, _, Backbone,GraphicsView) {
    /**
    * Rectangle element
    */
    var RectangleView = GraphicsView.extend({

        renderTo: function (paper) {
            /// <summary>
            /// Renders rectangle on raphael paper
            /// </summary>
            /// <param name="paper">Raphael.paper</param>
            if (this._rect) {
                this._rect.remove();
            }
            this._rect = paper.rect(this.x, this.y, this.width, this.height);
            this._rect.attr("fill", this.color);
            this._rect.attr("fill-opacity", this.opacity);
            this._rect.attr('stroke', this.borderColor);
            this._rect.attr('stroke-opacity', this.borderOpacity);
            this._rect.attr('stroke-width', this.borderThickness);
            
        }

    });
    return RectangleView;
});