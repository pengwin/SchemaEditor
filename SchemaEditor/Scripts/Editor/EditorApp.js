
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
    var modelsTest = {};

    parent.Views = views;
    parent.Views.Test = viewTest;
    parent.Models = models;
    parent.Models.Tests = modelsTest;

    return parent;
} (Editor || {}));
