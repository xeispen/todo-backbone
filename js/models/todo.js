/*global Backbone */
// if app exists, don't do anything. If not, set to empty object
var app = app || {};

// Immediately Invoked Function Expression
(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title`, `priority` and `completed` keys.
		defaults: {
			title: '',
			priority: false,
			completed: false
		},


		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		},


		// Toggle the `priority` state of this todo item.
		// If !this.get('priority') returns true, we set to false, vice versa
		ptoggle: function() {
			this.save({
				priority: !this.get('priority')
			});
		}





	});
})();
