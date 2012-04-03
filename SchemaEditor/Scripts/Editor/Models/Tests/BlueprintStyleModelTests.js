Editor.Models.Test = (function (parent) {

    var BlueprintStyleModelTests = function () {

        var BlueprintStyleModel = Editor.Models.BlueprintStyleModel; // alias 

        module("BlueprintStyleModel Tests");

        test("constructor tests", function () {
            var model = new BlueprintStyleModel();
            equal(model.get('backColor'), 'white', 'test defaults: backColor');
            equal(model.get('gridColor'), 'gray', 'test defaults: gridColor');
            equal(model.get('borderColor'), 'gray', 'test defaults: borderColor');
            equal(model.get('gridThickness'), 0.5, 'test defaults: gridThickness');
            equal(model.get('borderThickness'), 1, 'test defaults: borderThickness');
            equal(model.get('borderOpacity'), 0.8, 'test defaults: borderOpacity');
            equal(model.get('gridOpacity'), 0.4, 'test defaults: gridOpacity');
            
        });

        test("validate tests", function () {
            var model = new BlueprintStyleModel({ gridThickness: 1, borderThickness: 1, borderOpacity: 1, gridOpacity: 1 });
            model.set('gridThickness', -0.5);
            equal(model.get('gridThickness'), 1, 'test validate: gridThickness');
            model.set('borderThickness', -2.0);
            equal(model.get('borderThickness'), 1, 'test validate: borderThickness');
            model.set('borderOpacity', -1.0);
            equal(model.get('borderOpacity'), 1, 'test validate: borderOpacity');
            model.set('gridOpacity', -1.0);
            equal(model.get('gridOpacity'), 1, 'test validate: gridOpacity');
        });
    };

    parent.BlueprintStyleModelTests = BlueprintStyleModelTests;
    return parent;
} (Editor.Models.Test || {}));