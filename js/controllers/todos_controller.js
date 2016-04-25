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
		},
		clearCompleted: function () {
			var completed = this.filterBy('isCompleted', true);
			completed.invoke('deleteRecord');
			completed.invoke('save');
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
	}.property('remaining'),

	hasCompleted: function () {
		return this.get('completed') > 0;
	}.property('hasCompleted'),

	completed: function() {
		return this.filterBy('isCompleted', true).get('length');
	}.property('@each.isCompleted'),

	allAreDone: function (key, value) {
		return !!this.get('length') && this.isEvery('isCompleted');
	}.property('@each.isCompleted')
});
