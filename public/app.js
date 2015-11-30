// public/core.js
var app = angular.module('todo', []);

app.controller('mainController', mainController);

function mainController(TODO){

    var vm = this;
    vm.todos = [];
    vm.createTodo = createTodo;
    vm.formData = {};
    vm.deleteTodo = deleteTodo;

    //
    TODO.fetchAll().then(function(data){
        vm.todos = data;
    });

    function createTodo() {
        TODO.create(vm.formData).then(function(data){
            vm.todos = data; // Refresh the UI after creating todo
            vm.formData = {};
        });
    }

    function deleteTodo(id) {
        TODO.delete(id).then(function(data){
            vm.todos = data; // Refresh the UI after Deleting todo 
        })
    }

}
