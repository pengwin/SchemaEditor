Editor.Models.Test = (function (parent) {

    var BlueprintModelsTests = function () {

        var BlueprintModel = Editor.Models.BlueprintModel; // alias 

        module("BlueprintModel Tests");

        test("model constructor tests", function () {
            var model = new BlueprintModel();
            equal(model.get('width'), 200, 'test defaults: width');
            equal(model.get('height'), 200, 'test defaults: height');
            equal(model.get('color'), 'white', 'test defaults: color');
        });

        test("model validate tests", function () {
            var model = new BlueprintModel({width: 100, height: 100});
            model.set('width', -5);
            equal(model.get('width'), 100, 'test validate: width');
            model.set('height', -200);
            equal(model.get('height'), 100, 'test validate: height');
        });
    };

    parent.BlueprintModelsTests = BlueprintModelsTests;
    return parent;
} (Editor.Models.Test || {}));