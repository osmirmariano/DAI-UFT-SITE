app.controller('editarController', ['$scope','$location', '$routeParams', '$firebaseObject', 'FBURL',   
    function($scope, $location, $routeParams, $firebaseObject, FBURL){
    
    var ref = new Firebase(FBURL + $routeParams.id);
		$scope.noticia = $firebaseObject(ref);
    
    $scope.editarNoticia = function() {
        $scope.noticia.$save({
            titulo: $scope.noticia.titulo,
            descricao: $scope.noticia.descricao
        });
        $scope.edit_form.$setPristine();
        $scope.noticia = {};
        $location.path('/noticias');
        
    };
     
}]);