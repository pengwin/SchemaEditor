
var Editor = (function (parent) {
	/// <summary>
    /// Define module Editor
    /// Module represents Editor application
	/// </summary>
	/// <param name="parent">module itself</param>
	/// <returns type="">module</returns>
    
    // define module submodules
    var views = {};
    var models = {};
    var viewTest = {};
    
    parent.Views = views;
    parent.Models = models;
    parent.Views.Test = viewTest;

    return parent;
} (Editor || {}));
