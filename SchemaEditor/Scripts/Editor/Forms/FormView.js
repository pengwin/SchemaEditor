// Use this as a quick template for future modules
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/form.htm'
], function ($, _, Backbone, form_template) {

    /**
    * Form view
    * responsible for:
    *  rendering  form which generated according to data dictionary
    *  fetching data dictionary from rendered form
    */
    var FormView = Backbone.View.extend({
        initialize: function () {
            /// <summary>
            /// Constructor
            /// </summary>

        },
        render: function (caption, attrs) {
            /// <summary>
            /// Renders form with caption and fields with value from attrs
            /// </summary>
            /// <param name="caption"></param>
            /// <param name="attrs"></param>

            this.el = this.make("div", { class: "form" });
            var context = { caption: caption, modelKeys: Object.keys(attrs), model: attrs };
            var renderedTemplate = _.template(form_template, context);
            $(this.el).html(renderedTemplate);
            var controls = $('div.form_controls', this.el);
            this.submitButton = $('input#submit', controls);
            this.cancelButton = $('input#cancel', controls);
            return this.el;
        },

        fetch: function () {
            /// <summary>
            /// Gets data from form fields 
            /// </summary>
            /// <returns type="">fetched data</returns>

            if (typeof this.el == 'undefined') {
                throw { message: "form hasn't been rendered" };
            }
            var result = {};
            var content = $('div.form_content', this.el);
            $("input[type='text']", content).each(function (index, item) {
                var id = $(item).attr('id');
                var value = $(item).attr('value');
                // if text field value is number
                if (!isNaN(value)) { 
                    value = parseFloat(value); // return number
                }
                result[id] = value;
            });
            return result;
        },
        message: function (message) {
            /// <summary>
            /// Gets or sets message on form
            /// </summary>
            /// <param name="message"></param>

            if (typeof this.el == 'undefined') {
                throw { message: "form hasn't been rendered" };
            }
            var content = $('div.form_content', this.el);
            var messageEl = $('#message', content);
            if (typeof message == 'undefined') {
                return messageEl.html();
            }
            messageEl.html(message);
        },

        show: function () {
            /// <summary>
            /// Shows form
            /// </summary>

            if (typeof this.el == 'undefined') {
                throw { message: "form hasn't been rendered" };
            }
            $(this.el).css('display', 'block');
        },

        hide: function () {
            /// <summary>
            /// Hides form
            /// </summary>

            if (typeof this.el == 'undefined') {
                throw { message: "form hasn't been rendered" };
            }
            $(this.el).css('display', 'none');
        },

        update: function (attrs) {
            /// <summary>
            /// Updates form fields with members of data
            /// </summary>
            /// <param name="attrs"></param>

            if (typeof this.el == 'undefined') {
                throw { message: "form hasn't been rendered" };
            }
            if (typeof attrs == 'undefined') {
                throw { message: "parameter 'attrs' not defined" };
            }

            var content = $('div.form_content', this.el);

            $("input[type='text']", content).each(function (index, item) {
                var id = $(item).attr('id');
                $(item).attr('value', attrs[id]);
            });
        }

    });
    return FormView;
});