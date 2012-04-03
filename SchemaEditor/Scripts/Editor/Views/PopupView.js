Editor.Views = (function (parent) {

    var popupTemplate =
        "<div id='popup_content'>" +
        "<%= content %>" +
        "</div>" +
        "<div id='popup_controls'>" +
            "<input id='popup_ok' type='button' value='OK' />" +
            "<input id='popup_cancel' type='button' value='Cancel' />" +
        "</div>";

    /**
    * Base class for PopupWindows
    */
    parent.PopupView = Backbone.View.extend({

        initialize: function (attrs) {
            /// <summary>
            /// Constructor
            /// </summary>
            /// <param name="attrs">
            /// {overlayView} containing overlay - required
            /// {context} view template context consist of one element content
            /// {okClick} button OK click callback
            /// {cancelClick} button Cancel click callback
            /// </param>

            if (!attrs.overlayView) {
                throw { message: 'attribute overlayView is undeclared' };
            }

            if (attrs.context) {
                this.context = attrs.context;
            }
            else {
                this.context = { content: "" };
            }

            if (attrs.okClick) {
                this.okClick = attrs.okClick;
            }

            if (attrs.cancelClick) {
                this.cancelClick = attrs.cancelClick;
            }

            this.overlayView = attrs.overlayView;
            this.render();
            this.overlayView.addSubPopup(this);

            this._okButton = $("div#popup_controls input#popup_ok", this.el);

            this._cancelButton = $("div#popup_controls input#popup_cancel", this.el);

            _.extend(this, Backbone.Events);

            this.on("okClick", this.okClick);
            this.on("cancelClick", this.cancelClick);

            var instance = this;
            this._okButton.click(function () {
                instance.trigger("okClick", instance);
            });
            this._cancelButton.click(function () {
                instance.trigger("cancelClick", instance);
            });
        },

        render: function () {
            /// <summary>
            /// Renders popup content
            /// </summary>
            this.el = this.make("div", { class: "popup" });
            $(this.el).append(_.template(popupTemplate, this.context));
        },

        show: function () {
            /// <summary>
            /// shows popup window
            /// </summary>

            this.overlayView.hideAllSubPopups();
            $(this.el).show();
        },

        hide: function () {
            /// <summary>
            /// hides popup window
            /// </summary>

            $(this.el).hide();
            this.overlayView.hide();
        },

        okClick: function (sender) {
            /// <summary>
            /// Button OK default handler
            /// </summary>
            /// <param name="sender"></param>

            sender.hide();
        },

        cancelClick: function (sender) {
            /// <summary>
            /// Button Cancel click default handler
            /// </summary>
            /// <param name="sender"></param>

            sender.hide();
        }
    });
    return parent;
} (Editor.Views || {}));