// Module: DrawRectAction

define([
  'jquery',
  'underscore',
  'backbone',
  'actions/actions'
], function ($, _, Backbone) {

    var DrawRectAction = function (blueprintWidget) {
    	/// <summary>
        /// Class represents a draw rectangle action
        /// Modifies the blueprintWidget
    	/// </summary>
    	/// <param name="blueprintWidget"></param>

        this.blueprint = blueprintWidget;

        this.pos = { x: 0, y: 0 };

        this.state = 'no_rect';

    };

    DrawRectAction.prototype.setPosition = function (position) {
    	/// <summary>
        /// Sets the cursor position.
    	/// Resizes current rectangle if action in resize rect state.
    	/// </summary>
        /// <param name="position"></param>
        
        this.pos.x = position.x;
        this.pos.y = position.y;
        if (this.state == 'resize_rect') {
            var newWidth = this.pos.x - this.startPos.x;
            var newHeight = this.pos.y - this.startPos.y;
            this.rectangle.model.set({
                width: newWidth,
                height: newHeight
            });
        }
    };

    DrawRectAction.prototype.execute = function () {
    	/// <summary>
        /// Performs the action.
        /// First call creates rectangle widget, sets it as current and sets rect resize state.
    	/// Second call puts action to initial state.
    	/// </summary>
    	/// <returns type=""></returns>

        if (this.state == 'no_rect') {
            this.rectangle = this.blueprint.drawRect();
            this.rectangle.model.set({
                x: this.pos.x,
                y: this.pos.y
            });
            this.startPos = {
                x: this.pos.x, y: this.pos.y
            };

            this.rectangle.update();
            this.state = 'resize_rect';
        } else if (this.state == 'resize_rect') {
            this.state = 'no_rect';
        }
        return true;
    };

    return DrawRectAction;
});