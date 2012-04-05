// Use this as a quick template for future modules
define(['models/blueprint', ], function (Blueprint ) {
           
    return {
        Blueprint: Blueprint,
        Tests : {
            testBlueprint: testBlueprint,
            runTests : function() {
                testBlueprint();
            }
        }
    };
});