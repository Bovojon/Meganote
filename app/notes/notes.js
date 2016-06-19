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
      templateUrl: 'notes/notes-form.html',
      controller: 'NotesFormController'
    });
  }

  NotesController.$inject = ['$scope', 'Flash', 'NotesService'];
// Build NotesController for controller
  function NotesController($scope, Flash, NotesService){
    //$state.go('notes.form');

    NotesService.getNotes()
      .then(function(){
        $scope.notes = NotesService.notes;
      });

    // $scope.note = { title:'', body_html:'' }; //reset input fields at beginning

    $scope.clearForm = function(){
      $scope.note = { title:'', body_html: '' };
    };

    $scope.save = function(){
      if($scope.note._id){
        NotesService.update($scope.note)
          .then(
            function(res){
              $scope.note = res.data.note;
              Flash.create('success', res.data.message);
            },
            function(){
              Flash.create('danger', 'Oops');
            });
      }
      else{
        NotesService.create($scope.note)
          .then(
            function(res){
              $scope.note = res.data.note;
              Flash.create('success', res.data.message);
            },
            function(){
              Flash.create('danger', 'Oops');
            });
      }
    };

    // $scope.edit = function(note){
      // $scope.note = angular.copy(note); //Edit copies of notes, rather than the originals
    // };

    $scope.delete = function(){
      NotesService.delete($scope.note)
        .then(function(){
          $scope.clearForm();
        });
    };

    $scope.clearForm();
  }
}());
