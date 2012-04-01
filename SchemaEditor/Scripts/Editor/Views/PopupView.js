/*
* Adds class to a submodule
*/
Editor.Views = (function (parent) {

    /**
    * Base class for PopupWindows
    */
    parent.PopupView = Backbone.View.extend({

        className: 'popup',

        events: {
            'click #popup_ok': 'ok'
        },

        /**
        * constructor
        */
        initialize: function (attrs) {
            if (attrs && attrs.template) {
                this.template = attrs.template;
            }
            this.context = {
                title: 'Welcome',
                content: 'Welcome string'
            };
            this.el = $("#popup_content");

            this._overlay = $(".popup__overlay");
            this._ok = $("#popup_ok");
            this._cancel = $("#popup_cancel");

            this.render();
        },

        /**
        * Renders popup content
        */
        render: function () {
            if (this.template) {
                var template = _.template(this.template, this.context);
                this.el.html(template);
            }
            return this;
        },

        /**
        * shows popup window
        */
        show: function () {
            this._overlay.css('display', 'block');
        },

        /**
        * hides popup window
        */
        hide: function () {
            this._overlay.css('display', 'none');
        },

        ok: function () {

        }
    });
    return parent;
} (Editor.Views || {}));