define([
  '../formfactory',
  'qunit',
], function (FormManager) {

    function testFormFactory() {


        QUnit.module("FormFactory Tests", {
            setup: function () {
            },
            teardown: function () {

            }
        });

        QUnit.test("constructor test", function () {
            var target = new FormManager();
            QUnit.ok('succsess');
        });


        QUnit.test("getFormForModel test", function () {
            var target = new FormManager();
            var actual = target.getFormForModel('Test',{ cid: 25, attributes: { name: 'test', pass: '123' }});
            QUnit.ok(typeof actual != 'undefined', 'object has been returned');
            QUnit.equal($('div.form_content h3', actual.el).html(), 'Test #25', 'form_title has been set');
        });
    }

    return testFormFactory;
});