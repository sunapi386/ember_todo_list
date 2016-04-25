// This controller will now respond to user action by using its newTitle property as the title of a new todo whose
// isCompleted property is false. Then it will clear its newTitle property which will synchronize to the template and
// reset the textfield. Finally, it persists any unsaved changes on the todo.

Todos.TodosController = Ember.ArrayController.extend({
	actions: {
		createTodo: function() {
			var title = this.get('newTitle');
			if(!title.trim()) {return; }

			var todo = this.store.createRecord('todo', {
				title: title, isCompleted: false
			});

			this.set('newTitle', '');

			todo.save();
		}
	},

	remaining: function () {
		// the 'remaining' property will return the number of todos whose isCompleted property is false
		// if the isCompleted property of any todo changes, this property is recomputed
		return this.filterBy('isCompleted', false).get('length');
	}.property('@each.isCompleted'),

	inflection: function () {
		var remaining = this.get('remaining');
		return remaining === 1 ? 'item' : 'items';
	}.property('remaining')
});
