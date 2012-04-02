Editor.Models = (function (parent) {

    var BlueprintModel = Backbone.Model.extend({
        defaults: {
            width: 200,
            height: 200,
            color: 'white'
        },
        initialize: function () {
            /// <summary>
            /// constructor
            /// </summary>

        },

        validate: function (attrs) {
            if (attrs.width <= 0) {
                return "incorrect width should be greater than 0";
            }
            if (attrs.height <= 0) {
                return "incorrect height should be greater than 0";
            }
        }
    });

    parent.BlueprintModel = BlueprintModel;
    return parent;
} (Editor.Models || {}));