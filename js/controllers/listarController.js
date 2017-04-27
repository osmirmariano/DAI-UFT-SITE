app.controller('listarController', ['$scope', '$firebaseArray', '$firebaseObject', 'FBURL', function($scope, $firebaseArray, $firebaseObject, FBURL){
  
  var noticias = new Firebase(FBURL);
  $scope.noticias = $firebaseArray(noticias);
  
  $scope.removeNoticias = function(id) {
    var ref = new Firebase(FBURL + id);
    var noticia = $firebaseObject(ref)
    noticia.$remove();
   };
   
}]);