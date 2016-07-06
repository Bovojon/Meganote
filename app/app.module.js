(function(){
	angular.module('meganote.notes', [
		'ui.router',
		'ngFlash',
		'meganote.notes'
	])
		.config(config);

	config.$inject = ['$urlRouterProvider'];
	function config($urlRouterProvider){
		$urlRouterProvider.otherwise('/notes/');
	}

})();
