Editor.Views = (function (parent) {

    /**
      * Container for popup windows
    */
    var PopupOverlayView = Backbone.View.extend({

        initialize: function (attr) {
            /// <summary>
            /// Constructor
            /// </summary>

            this.popups = [];

            this.render();
        },

        render: function () {
            /// <summary>
            /// Renders overlay in body if it is not exists
            /// </summary>

            if ($(".popup__overlay").length == 0) {
                this.el = this.make("div", { class: "popup__overlay" });
                $('body').append(this.el);
            }
        },

        show: function () {
            /// <summary>
            /// Shows overlay
            /// </summary>

            $(this.el).css('display', 'block');
        },

        hide: function () {
            /// <summary>
            /// Hides overlay
            /// </summary>

            $(this.el).css('display', 'none');
        },

        addSubPopup: function (popup) {
            /// <summary>
            /// Adds popup to overlay
            /// </summary>
            /// <param name="popup">subview that extends Backbone.View and implements method hide</param>

            $(this.el).append(popup.el);
            this.popups.push(popup);
        },

        hideAllSubPopups: function () {
            /// <summary>
            /// Hides all sub popups
            /// </summary>

            for (var i = 0; i < this.popups.length; i++) {
                this.popups[i].hide();
            }
        }

    });
    parent.PopupOverlayView = PopupOverlayView;
    return parent;
} (Editor.Views || {}));