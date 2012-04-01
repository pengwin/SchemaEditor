/*
* Adds class to a submodule
*/
Editor.Views = (function (parent) {

    /**
    * Base class for PopupWindows
    */
    parent.PopupView = Backbone.View.extend({

        /**
        * constructor
        */
        initialize: function (attrs) {

            if (attrs && attrs.template) {
                this.template = attrs.template;
            }
            else {
                // set default template
                this.template = $("#test_popup_template").html();
            }

            if (attrs && attrs.context) {
                this.context = attrs.context;
            }
            else {
                // set default context
                this.context = {
                    title: 'Test',
                    content: 'Test message'
                };
            }

            this.el = $("#popup_content");

            this._overlay = $(".popup__overlay");
            this._ok = $("#popup_ok");
            this._cancel = $("#popup_cancel");

            _.extend(this, Backbone.Events);

            this.on("ok", this.ok );

            this.on("cancel",this.cancel );

            var instance = this;
            this._ok.click(function () {
                instance.trigger("ok", instance);
            });
            this._cancel.click(function () {
                instance.trigger("cancel", instance);
            });

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
          
        /**
        * Button OK click handler
        */
        ok : function (sender) {
                sender.hide();
            },
            
        /**
        * Button Cancel click handler
        */
        cancel: function (sender) {
                sender.hide();
            }  
    });
    return parent;
} (Editor.Views || {}));