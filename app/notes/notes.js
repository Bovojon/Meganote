//Wrap in IIFE
(function(){

angular.module('meganote.notes', ['ui.router'])
  .config(notesConfig)
  .controller('NotesController', NotesController);

// Inorder to use strict dependency injection:
  notesConfig.$inject = ['$stateProvider'];
// Thenuild config function for .config
  function notesConfig($stateProvider){
    $stateProvider

    .state('notes', {
    url: '/notes',
    templateUrl: 'notes/notes.html',
    controller: 'NotesController'
    })

    .state('notes.form', {
    url: '/:noteId',
    templateUrl: 'notes/notes-form.html'
    });
  }

  NotesController.$inject = ['$scope'];
// Build NotesController for controller
  function NotesController($scope){
    $scope.notes = []; //an array
    $scope.note = { title:'', body:'' }; //reset input fields at beginning

    $scope.save = function(){
    $scope.notes.push($scope.note); // The push() method adds one or more elements to the end of an array and returns the new length of the array.
    $scope.note = { title:'', body:'' }; //reset after submitting
    }

  }
}());

