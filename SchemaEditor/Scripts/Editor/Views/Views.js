
define(['views/toolspanel', 'views/forms/formview','views/graphics/blueprintgraphics','views/graphics/rectanglegraphics'],
    function (ToolsPanel, FormView,BlueprintGraphics,RectangleGraphics) {

        return {
            ToolsPanel: ToolsPanel,
            
            Forms : {
                FormView : FormView
            },
            Graphics : {
                BlueprintGraphics: BlueprintGraphics,
                RectangleGraphics: RectangleGraphics
            }
        };
    });