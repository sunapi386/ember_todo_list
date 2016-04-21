Todos.Router.map(function() {
	// tell emberjs to detect when url is '/' and render the todos template
	this.resource('todos', { path: '/' });
});

Todos.TodosRoute = Ember.Route.extend({
	// a TodosRoute class with a model function that returns all the existing todos
	model: function() {
		return this.store.find('todo');
	}
});
