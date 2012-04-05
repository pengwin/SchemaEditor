
define([
  'jquery',
  'underscore',
  'backbone',
  'raphael'
], function ($, _, Backbone) {
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
            /// object supports events mouseup,mousedown,mousemove
            /// </param>

            if (typeof attr == 'undefined' || typeof attr.container == 'undefined') {
                throw { message: "attribute: 'container' is not set " };
                }
            
            this.setDefaults();
            this.container = attr.container;
            
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

            if (typeof attr == 'undefined') {
                return;
            }
            if (typeof attr.width != 'undefined') {
                this.width = attr.width;
                $(this.el).width(this.width);
            }
            if (typeof attr.height != 'undefined') {
                this.height = attr.height;
                $(this.el).height(this.height);
            }
            if (typeof attr.color != 'undefined') {
                this.color = attr.color;
                $(this.el).css('background-color', this.color);
            }
            if (typeof attr.padding != 'undefined') {
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
            var self = this;

            $(this.el).mouseup(function () {
                self.trigger("mouseup", self);
            });

            $(this.el).mousedown(function () {
                self.trigger("mousedown", self);
            });

            $(this.el).mousemove(function (event) {
                self.trigger("mousemove", self, { x: event.pageX, y: event.pageY });
            });
        }
    });
    return BlueprintView;
});