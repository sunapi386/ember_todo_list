Todos.Router.map(function() {
	// tell emberjs to detect when url is '/' and render the todos template
	this.resource('todos', { path: '/' });
});
