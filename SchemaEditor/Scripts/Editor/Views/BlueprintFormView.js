Editor.Views = (function (parent) {

    var popupTemplate =
     "<h3>Blueprint</h3>" +
     "<div id='message'></div>" +
     "<label for='width'>Width</label><input id='width' type='text'/>" +
     "<label for='height'>Height</label><input id='height' type='text'/>" +
     "<label for='margin'>Margin</label><input id='margin' type='text'/>" +
     "<label for='gridStep'>Grid step</label><input id='gridStep' type='text'/>";

    /**
    * Form View for Blueprint
    */
    parent.BlueprintFormView = Editor.Views.PopupView.extend({

        initialize: function (attrs) {
            /// <summary>
            /// Constructor
            /// </summary>
            /// <param name="attrs">
            /// {data} - blueprint data object
            /// </param>

            Editor.Views.PopupView.prototype.initialize.call(this, attrs);

            var content = $("div#popup_content", this.el);
            content.append(_.template(popupTemplate));

            if (attrs.data) {
                this.fillData(attrs.data);
            }
        },

        putMessage: function (message) {
        	/// <summary>
        	/// Put message on the form
        	/// </summary>
            /// <param name="message"></param>

            $("div#popup_content div#message", this.el).html(message);
        },

        fillData: function (data) {
            /// <summary>
            /// Fill form with data
            /// </summary>
            /// <param name="data">blueprint data object</param>

            var content = $("div#popup_content", this.el);
            $("#width", content).val(data.width);
            $("#height", content).val(data.height);
            $("#margin", content).val(data.margin);
            $("#gridStep", content).val(data.gridStep);
        },

        fetchData: function () {
            var content = $("div#popup_content", this.el);
            var data = {};
            data.width = parseFloat($("#width", content).val());
            data.height = parseFloat($("#height", content).val());
            data.margin = parseFloat($("#margin", content).val());
            data.gridStep = parseFloat($("#gridStep", content).val());
            return data;
        }
    });

    return parent;
} (Editor.Views || {}));