
define([
  'jquery',
  'underscore',
  'backbone',
  'models/blockmodel'
], function ($, _, Backbone,BlockModel) {

    /**
    * Model of rectangle block
    */
    var RectangleModel = BlockModel.extend({

        defaults: {
            type: 'rectangle',
            x: 0,
            y: 0,
            width: 200,
            height: 200
        }
    });
    return RectangleModel;
});