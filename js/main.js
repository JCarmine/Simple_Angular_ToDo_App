function TodoCtrl($scope) {
  
  $scope.todos = [
    {text:'Todo Item 1', done:false},         
    {text: 'Todo Item 2', done:false}
  ];
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
}