Todos.TodoController = Ember.ObjectController.extend({
	isCompleted: function (key, value) {
		var model = this.get('model');
		if (value === undefined) {
			return model.get('isCompleted'); // property being used as a getter
		} else {
			model.set('isCompleted', value);
			model.save();
			return value;
		}
	}.property('model.isCompleted')
});
