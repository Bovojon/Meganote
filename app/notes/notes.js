angular

.module('meganote.notes', [
  'ui.router'
  ])

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

.controller('NotesController', function(){
});
