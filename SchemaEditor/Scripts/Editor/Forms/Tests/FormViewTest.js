define([
  '../formview',
  'qunit',
], function (FormView) {

    function testFormView() {

        var testBenchId = "#test_workbench";

        QUnit.module("FormView Tests", {
            setup: function () {
            },
            teardown: function () {
                
            }
        });

        QUnit.test("constructor test", function () {
            var target = new FormView();
            QUnit.ok('successful');
        });

        QUnit.test("render test", function () {
            var target = new FormView();
            var actual = target.render('Test', { name: 'test', pass: '123' });
            QUnit.ok(typeof target.el != 'undefined', 'element has been created');
            QUnit.equal(actual,target.el, 'element has been returned');
            
            QUnit.equal($('div.form_content', target.el).length, 1, 'form_content has been created');
            QUnit.equal($('div.form_content h3', target.el).html(), 'Test', 'form_title has been set');

            QUnit.equal($('div.form_content input#name', target.el).val(), 'test', 'input name value has been set');
            QUnit.equal($('div.form_content input#pass', target.el).val(), '123', 'input pass value has been set');

            QUnit.equal($('div.form_controls input#submit', target.el)[0], target.submitButton[0], 'submit has been set');
            QUnit.equal($('div.form_controls input#cancel', target.el)[0], target.cancelButton[0], 'cancel has been set');
            QUnit.equal($('div.form_controls input#submit', target.el).val(), 'Submit', 'submit button text has been set');
        });

        QUnit.test("render with excluded fields test", function () {
            var target = new FormView();
            var actual = target.render('Test', { name: 'test', pass: '123' },['name']);
            QUnit.ok(typeof target.el != 'undefined', 'element has been created');
            QUnit.equal(actual, target.el, 'element has been returned');

            QUnit.equal($('div.form_content input#name', target.el).length, 0, 'input name has been excluded');

        });

        QUnit.test("fetch test", function () {
            var target = new FormView();

            var expected = { name: 'test', pass: '123' };

            target.render('Test', expected);
            var actual = target.fetch();

            QUnit.equal(actual.name, expected.name, "attribute name fetched");
            QUnit.equal(actual.pass, expected.pass, "attribute pass fetched");
        });

        QUnit.test("message test", function () {
            var target = new FormView();
            target.render('Test', { name: 'test', pass: '123' });
            target.message('test');
            QUnit.equal($('div.form_content div#message', target.el).html(), 'test', 'form_message has been set');
            var actual = target.message();
            QUnit.equal($('div.form_content div#message', target.el).html(), actual, 'form_message has been returned');
        });

        QUnit.test("show test", function () {
            var target = new FormView();
            target.render('Test', { name: 'test', pass: '123' });
            target.show();
            QUnit.equal($(target.el).css('display'), 'block', 'form has been shown');
        });


        QUnit.test("update test", function () {
            var target = new FormView();
            target.render('Test', { name: 'test', pass: '123' });

            var expected = { name: 'test2', pass: '456' };

            target.update(expected);

            QUnit.equal($('div.form_content input#name', target.el).val(), expected.name, 'input name value has been changed');
            QUnit.equal($('div.form_content input#pass', target.el).val(), expected.pass, 'input pass value has been changed');
        });
    }

    return testFormView;
});