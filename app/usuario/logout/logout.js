var miControlador = miModulo.controller(
    "usuarioLogoutController",
    function ($scope,$location,promesasService,auth) {
        $scope.controller="usuarioLogoutController";
        
        if (auth.data.status != 200) {
            $location.path('/login');
        } else {
            $scope.authStatus = auth.data.status;
            $scope.usuario = auth.data.message;
        }
            promesasService.ajaxLogout()
            .then(function (response){
                $scope.session= false;
                $location.path("/login");
            }, function(response){
                $scope.session= true;
                $scope.falloMensaje ="No se ha podido cerrar sesion.";
            })
       
    }
)
