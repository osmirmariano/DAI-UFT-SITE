var app = angular.module('myApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
  $routeProvider
	.when('/', {
		controller: 'listarController',
		templateUrl: 'views/listar.html'
	})
	.when('/adicionar', {
		controller: 'adicionarController',
		templateUrl: 'views/adicionar.html'
	})
	.when('/editar/:id', {
		controller: 'editarController',
		templateUrl: 'views/editar.html'
	
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.constant("FBURL", 
  "https://appdai-beta.firebaseio.com/" //Use the URL of your project here
);
