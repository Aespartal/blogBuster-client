var miControlador = miModulo.controller(
    "usuarioLoginController",
    ['$scope', '$http', '$routeParams', '$location', 'promesasService','auth', function ($scope, $location, promesasService,auth) {
        $scope.controller = "usuarioLoginController";
        $scope.usuario ="";
        
             if(auth.data.status==200){
                 $scope.session= true;
                 $scope.usuario=response.data.message;
             } else {
                 $scope.session= false;
             }

        $scope.login = function () {
            usuario = $scope.user.username;
            password = $scope.user.password;
            if (usuario != "" && password != "") {
                promesasService.ajaxLogin(usuario, password)
                    .then(function (response) {
                        $scope.session = true;
                        $location.path("/home/10/1");
                    }, function (response) {
                        $scope.session = false;
                        $scope.falloMensaje = response.data.message;
                    });
            }
        }



    }]
)
