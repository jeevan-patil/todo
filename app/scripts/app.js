/**
 * Created by jeevan on 22/1/15.
 */

angular.module("todoApp", []).controller("TodoCtrl", function($scope) {

    $scope.todos = [];

    $scope.add = function() {
        $scope.todos.push($scope.newTodo);
        $scope.newTodo = {};
    }

    $scope.delete = function(index) {
        $scope.todos.splice(index, 1);
    }

    $scope.clearCompleted = function() {
        for(var i = $scope.todos.length - 1; i >= 0; i--) {
            if($scope.todos[i].completed) {
                $scope.todos.splice(i, 1);
            }
        }
    }
});