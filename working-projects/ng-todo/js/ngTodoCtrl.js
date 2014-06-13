ngTodo.controller('NgTodoCtrl', function NgTodoCrtl($scope) {
  $scope.todos = [
    { val: "A cool new thing", completed: false },
    { val: "A cool new thing, all alike", completed: true },
    { val: "A cool new thing, all different", completed: false },
    { val: "A cool new thing, twisting dangerously", completed: false },
    { val: "A cool new thing, newer and twistier", completed: false }
  ];

  $scope.addNewTask = function() {
    $scope.todos.push({ completed: false, val: $scope.newTask });
    $scope.newTask = '';
  };

  $scope.clearCompleted = function() {
    $scope.todos = $scope.todos.filter(function(el) {
      return !el.completed;
    });
  }

});
