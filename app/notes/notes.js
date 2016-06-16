angular

//The module:
.module('meganote.notes', [
  'ui.router'
  ])

//The config:
.config(function($stateProvider){
  $stateProvider
  //State if url entered is /notes
  .state('notes', {
    url: '/notes',
    templateUrl: 'notes/notes.html',
    controller: 'NotesController'
  })
  //State if url entered is /idOfNote
  .state('notes.form', {
    url: '/:noteId',
    templateUrl: 'notes/notes-form.html'
  });
})

//The controller:
.controller('NotesController', function($scope){
  $scope.notes = []; //an array
  $scope.note = { title:'', body:'' }; //reset input fields at beginning

  $scope.save = function(){
    $scope.notes.push($scope.note); // The push() method adds one or more elements to the end of an array and returns the new length of the array.
    $scope.note = { title:'', body:'' }; //reset after submitting
  }

});
