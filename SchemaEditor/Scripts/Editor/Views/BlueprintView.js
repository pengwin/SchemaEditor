Editor.Views = (function (parent) {

    /**
    *  View for blueprint
    *  Contains raphael paper created in container
    */
    var BlueprintView = Backbone.View.extend({

        setDefaults: function () {
            /// <summary>
            /// Set default values
            /// </summary>

            this.width = 1;
            this.height = 1;
            this.color = 'white';
            this.padding = 5;
        },

        initialize: function (attr) {
            /// <summary>
            /// Constructor
            /// </summary>
            /// <param name="attr">
            /// dictionary with params
            /// {container} set container for raphael paper
            /// {width, height} - set blueprint size
            /// {color} - background color for blueprint
            /// </param>

            this.setDefaults();

            if (attr) {
                if (attr.container) {
                    this.container = attr.container;
                }
            }
            this.renderTo(this.container);
            this.set(attr);
        },

        set: function (attr) {
            /// <summary>
            /// Set blueprints attributes
            /// </summary>
            /// <param name="attr">
            /// dictionary width params:
            /// {width, height} - set blueprint size
            /// </param>

            if (!attr) {
                return;
            }
            if (attr.width) {
                this.width = attr.width;
                $(this.el).width(this.width);
            }
            if (attr.height) {
                this.height = attr.height;
                $(this.el).height(this.height);
            }
            if (attr.color) {
                this.color = attr.color;
                $(this.el).css('background-color', this.color);
            }
            if (typeof (attr.padding) !== 'undefined') {
                this.padding = attr.padding;
                $(this.el).css('padding', this.padding);
            }
            this._paper.setSize(this.width, this.height);
        },


        renderTo: function (container) {
            /// <summary>
            /// Place block into container
            /// Creates raphael paper inside it
            /// </summary>
            /// <param name="container">DOM element for Raphael paper</param>

            if (!container) {
                throw { message: "Container is not set" };
            }
            this.el = this.make("div", { id: "blueprint", class: "blueprint" });
            container.append(this.el);
            var element = document.getElementById($(this.el).attr('id'));
            this._paper = Raphael(element, this.width, this.height);
            this.setMouseEvents();
        },

        setMouseEvents: function () {
            /// <summary>
            /// Sets up mouse events handlers on container
            /// </summary>

            _.extend(this, Backbone.Events);
            var instance = this;

            $(this.el).click(function () {
                instance.trigger("click", instance);
            });

            $(this.el).mousemove(function (event) {
                instance.trigger("mousemove", instance, { x: event.pageX, y: event.pageY });
            });
        },

        registerOnClickHandler: function (handler) {
            /// <summary>
            /// Adds mouse click event handler
            /// </summary>
            /// <param name="handler">function (sender) {}</param>

            this.on("click", handler);
        },

        unregisterOnClickHandler: function (handler) {
            /// <summary>
            /// Removes mouse click event handler
            /// </summary>
            /// <param name="handler">function (sender) {}</param>

            this.off("click", handler);
        },

        registerOnMousemoveHandler: function (handler) {
            /// <summary>
            /// Adds mouse move event handler
            /// </summary>
            /// <param name="handler">function (senser,curpos) {} where curpos = { x: x_pos, y: y_pos}</param>

            this.on("mousemove", handler);
        },

        unregisterOnMousemoveHandler: function (handler) {
            /// <summary>
            /// Removes mouse move event handler
            /// </summary>
            /// <param name="handler"></param>

            this.off("mousemove", handler);
        }
    });

    parent.BlueprintView = BlueprintView;
    return parent;
} (Editor.Views || {}));