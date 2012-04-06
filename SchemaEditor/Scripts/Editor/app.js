

define([
  'models/models',
  'views/views',
  'controllers/controllers',
  'forms/forms'
], function (Models, Views, Controllers, Forms) {

    var models = Models;

    var views = Views;

    var controllers = Controllers;

    var forms = Forms;

    return {
        Models: models,
        Views: views,
        Controllers: controllers,
        Forms: forms        
    };
});