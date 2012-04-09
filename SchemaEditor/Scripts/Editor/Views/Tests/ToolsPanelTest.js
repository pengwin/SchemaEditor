define([
  '../toolspanel',
  'qunit',
], function (ToolsPanel) {

    function testToolsPanel() {

        var testBenchId = "#test_workbench";

        QUnit.module("ToolsPanel Tests");

        QUnit.test('constructor test', function () {

            var target = new ToolsPanel();
            QUnit.ok(typeof target.state != 'undefined', 'target state has been initialized');

        });

        QUnit.test('render test', function () {

            var target = new ToolsPanel();
            var actual = target.render();
            QUnit.ok(typeof target.el != 'undefined', 'element has been created');
            QUnit.equal(actual, target.el, 'element has been returned');
            QUnit.equal($("input[name='tool']", target.el).length, 4, 'input radio has been initialized');

        });

        QUnit.test('refreshState test', function () {

            var target = new ToolsPanel();

            $("input[name='tool']#action_edit", target.el).attr('checked', true);

            target.refreshState();

            QUnit.equal(true, target.state.actionEdit, 'state has been changed');

        });

        QUnit.test('logic test', function () {

            var target = new ToolsPanel();
            target.render();

            $("input[name='tool']#action_edit", target.el).attr('checked', true);
            $("input[name='tool']#action_edit", target.el).change();

            QUnit.equal(true, target.state.actionEdit, 'state has been changed');

        });
    }
    return testToolsPanel;
});