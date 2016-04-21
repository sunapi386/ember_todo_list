Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});
// This code creates a new class Todo and places it within your application's namespace.
// Each todo will have two attributes: title and isCompleted.

Todos.Todo.FIXTURES = [
	{id: 1, isCompleted: true, title: 'Learn Ember.js'},
	{id: 2, isCompleted: false, title: '...'},
	{id: 3, isCompleted: false, title: '$$$!'},
];
