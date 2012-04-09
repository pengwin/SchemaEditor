define([
  'actions/editaction',
  'models/blueprintmodel',
  'views/forms/formview',
  'qunit',
], function (EditAction, BlueprintModel, FormView) {

    var testEditAction = function () {

        var testBenchId = "#test_workbench";

        QUnit.module("EditAction Tests", {
            setup: function () {
            },
            teardown: function () {
                $(testBenchId + ' .popup__overlay').remove();
            }
        });

        QUnit.test('constructor test', function () {

            var model = new BlueprintModel();
            var formView = new FormView();
            formView.render('Blueprint', model.attributes);

            var target = new EditAction(formView, model);

            QUnit.ok('true');
        });

        QUnit.test('execute test', function () {

            var model = new BlueprintModel();
            var formView = new FormView();
            formView.render('Blueprint', model.attributes);

            var target = new EditAction(formView, model);
            target.execute();

            QUnit.equal($(formView.el).css('display'), 'block', 'form has been shown');

        });

        QUnit.test('logic test', function () {

            var model = new BlueprintModel();
            var formView = new FormView();
            formView.render('Blueprint', model.attributes);

            var target = new EditAction(formView, model);
            target.execute();

            var sumbitButton = $('div.form_controls input#submit', formView.el);
            var cancelButton = $('div.form_controls input#cancel', formView.el);
            var widthEdit = $('div.form_content input#width', formView.el);

            sumbitButton.click();

            QUnit.equal($(formView.el).css('display'), 'none', 'form has been hidden without changes');

            target.execute();

            widthEdit.val(500);

            sumbitButton.click();

            QUnit.equal($(formView.el).css('display'), 'none', 'form has been hidden with changes');
            QUnit.equal($('div.form_content div#message', formView.el).html(), '', 'message error text is still empty');
            QUnit.equal(model.get('width'), 500, 'model width has been changed');

            target.execute();

            widthEdit.val('aqcp');

            sumbitButton.click();

            QUnit.equal($(formView.el).css('display'), 'block', 'form is still visible');
            QUnit.equal($('div.form_content div#message', formView.el).html(), 'Error: width is Not a Number', 'message error text has been changed');
            QUnit.equal(model.get('width'), 500, "model width hasn't been changed");
        });

    };

    return testEditAction;
});