// create instance of Ember Application
window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'todos-emberjs' // The local storage adapter, written by Ryan Florence
});
