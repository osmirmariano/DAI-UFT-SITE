var app = angular.module('myApp', ['ngRoute', 'firebase']);


app.config(function($routeProvider){
  $routeProvider
  	.when('/', {
		controller: 'listarController',
		templateUrl: 'views/listar.html'
	})
  	.when('/login', {
  		controller: 'loginController',
  		templateUrl: 'views/login.html'
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

app.constant("FBURL", "https://appdai-beta.firebaseio.com/");

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://appdai-beta.firebaseio.com/");
    return $firebaseAuth(ref);
  }
]);

