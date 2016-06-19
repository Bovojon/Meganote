(function(){
	angular.module('meganote.notes')
	.service('NotesService', NotesService);

	NotesService.$inject = ['$http'];
	function NotesService($http){
		var service = this;
		service.notes = [];

		service.getNotes = function(){
			var notesPromise = $http.get('http://localhost:3030/');
			notesPromise.then(function(res){
				service.notes = res.data; // The .data() method allows us to attach data of any type to DOM elements
			});
			return notesPromise
		};

		service.create = function(note){
			var notesPromise = $http.post('https://meganote.herokuapp.com/notes', {
				note: note
			});
			notesPromise.then(function(res){
				service.notes.unshift(res.data.note);
			});
			return notesPromise;
		};

		service.update = function(note){
			var notesPromise = $http.put('https://meganote.herokuapp.com/notes/' + note._id, {
				note: note
			});

			notesPromise.then(function(res){
				service.removeById(res.data.note._id);
				service.notes.unshift(res.data.note);
			});

			return notesPromise;
		};

		service.delete = function(note){
			var notesPromise = $http.delete('https://meganote.herokuapp.com/notes/' + note._id);
			notesPromise.then(function(res){
				service.removeById(res.data.note._id);
			});

			return notesPromise;
		};

		service.removeById = function(id){
			for (var i=0; i<service.notes.length; i++){
				if (service.notes[i]._id === id){
					return service.notes.splice(i,1); //splice method starts at i and 1 indictates how many to remove
				}
			}
		};

		service.find = function(id){
			for (var i=0; i<service.notes.length; i++){
				if(service.notes[i]._id === id){
					return angular.copy(service.notes[i]);
				}
			}
		};
	}
}());
