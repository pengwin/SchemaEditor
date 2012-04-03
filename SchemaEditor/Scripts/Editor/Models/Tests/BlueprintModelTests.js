Editor.Models.Test = (function (parent) {

    var BlueprintModelTests = function () {

        var BlueprintModel = Editor.Models.BlueprintModel; // alias 

        module("BlueprintModel Tests");

        test("constructor tests", function () {
            var model = new BlueprintModel();
            equal(model.get('width'), 200, 'test defaults: width');
            equal(model.get('height'), 200, 'test defaults: height');
            equal(model.get('margin'), 20, 'test defaults: margin');
            equal(model.get('gridStep'), 20, 'test defaults: grid step');
        });

        test("validate tests", function () {
            var model = new BlueprintModel({width: 100, height: 100, widthLimit: 500, heightLimit: 500});
            model.set('width', -5);
            equal(model.get('width'), 100, 'test validate: width bottom limit');
            model.set('height', -200);
            equal(model.get('height'), 100, 'test validate: height bottom limit');
            model.set('width', 800);
            equal(model.get('width'), 100, 'test validate: width top limit');
            model.set('height', 800);
            equal(model.get('height'), 100, 'test validate: height top limit');
        });
    };

    parent.BlueprintModelTests = BlueprintModelTests;
    return parent;
} (Editor.Models.Test || {}));