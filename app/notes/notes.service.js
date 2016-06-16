(function(){
	angular.module('meganote.notes')
	.service('NotesService', NotesService);

	NotesService.$inject = ['$http'];
	function NotesService($http){
		var service = this;
		service.notes = [];

		service.getNotes = function(){
			var notesPromise = $http.get('https://meganote.herokuapp.com/notes');
			notesPromise.then(function(res){
				service.notes = res.data; // The .data() method allows us to attach data of any type to DOM elements
			});
			return notesPromise
		};

		service.create = function(note){
			var notesPromise = $http.post('https://meganote.herokuapp.com/notes', {
				note: note
			});
			notesPromise.then(function(){
				service.notes.unshift(res.data.note);
			});
			return notesPromise;
		};
	}
}());