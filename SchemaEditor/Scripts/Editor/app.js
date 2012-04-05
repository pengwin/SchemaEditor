

define([
  'models/module',
  'views/module',
  'controllers/module'
], function (Models, Views, Controllers) {

    var models = Models;

    var views = Views;

    var controllers = Controllers;

    return {
        Models: models,
        Views: views,
        Controllers: controllers
    };
});