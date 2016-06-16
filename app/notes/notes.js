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

  NotesController.$inject = ['$state', '$scope', 'NotesService'];
// Build NotesController for controller
  function NotesController($state, $scope, NotesService){
    $state.go('notes.form');

    NotesService.getNotes()
      .then(function(){
        $scope.notes = NotesService.notes;
      });

    // $scope.note = { title:'', body_html:'' }; //reset input fields at beginning

    $scope.clearForm = function(){
      $scope.note = { title:'', body_html: '' };
    };


    $scope.save = function(){
      NotesService.create($scope.note);
      $scope.clearForm();
    };

    $scope.edit = function(note){
      $scope.note = angular.copy(note);
    };

    $scope.clearForm();
  }
}());

