var miControlador = miModulo.controller(
    "usuarioLogoutController",
    ['$scope', '$http', '$routeParams','$location','promesasService', function ($scope, $http, $routeParams,$location,promesasService) {
        $scope.controller="usuarioLogoutController";
   
            promesasService.ajaxLogout()
            .then(function (response){
                $scope.session= false;
                $location.path("/login");
            }, function(response){
                $scope.session= true;
                $scope.falloMensaje ="No se ha podido cerrar sesion.";
            })
       
    }]
)
