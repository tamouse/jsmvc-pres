window.TodoApp = new (Backbone.Router.extend({
  // only ever should have one router in an application,
  // so go ahead and extend it and instantiate it right away.
  routes : { '' : 'index'},
  initialize: function () {
    this.todoItems = new TodoItems();
    this.todosView = new TodosView({ collection : this.todoItems });
    this.todosView.render();

    $('.btn-clear').click(function () {
      window.TodoApp.todosView.filterCompleted();
    });

    $('.btn-success').click(function () {
      window.TodoApp.todoItems.add({val:$('#newTodo').val(), completed: false});
      $('#newTodo').val('');
    })
  },
  index : function() {
    var fixtures = [
      { val: "thing 1", completed: false},
      { val: "thing 2", completed: true},
      { val: "thing 3", completed: false},
      { val: "thing 4", completed: false},
      { val: "thing 5", completed: false},
      { val: "thing 6", completed: true}
    ];
    $('#app').html(this.todosView.el);
    this.todoItems.reset(fixtures)
  },
  start : function() {
    Backbone.history.start();
  }
}));

