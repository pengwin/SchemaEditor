
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
    var controllers = {};
    var viewTest = {};
    var modelsTest = {};
    var controllersTest = {};

    parent.Views = views;
    parent.Views.Test = viewTest;
    parent.Models = models;
    parent.Models.Tests = modelsTest;
    parent.Controllers = controllers;
    parent.Controllers.Test = controllersTest;

    return parent;
} (Editor || {}));
