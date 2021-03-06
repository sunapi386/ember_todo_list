Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});
// This code creates a new class Todo and places it within your application's namespace.
// Each todo will have two attributes: title and isCompleted.

Todos.Todo.FIXTURES = [
	{id: 1, isCompleted: true, title: 'Learn Ember.js'},
	{id: 2, isCompleted: false, title: 'Sophie dateline'},
	{id: 3, isCompleted: true, title: 'Work harder.'},
	{id: 4, isCompleted: false, title: 'Faster.'},
	{id: 5, isCompleted: false, title: 'Stronger.'},
	{id: 6, isCompleted: false, title: '... profit $$$!'},
];
