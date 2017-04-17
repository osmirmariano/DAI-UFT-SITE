app.controller('adicionarController', ['$scope', '$firebaseArray', '$location', 'FBURL', function($scope, $firebaseArray, $location, FBURL){
	
	$scope.adicionarNoticia = function() {
		var ref = new Firebase(FBURL);
		var noticia = $firebaseArray(ref);
		noticia.$add({
			sku: $scope.noticia.titulo,
			descricao: $scope.noticia.descricao
		});
		$location.path('/');
	};
	
}]);