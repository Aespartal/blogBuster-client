var miControlador = miModulo.controller(
    "usuarioLoginController",
    ['$scope', '$http', '$routeParams', '$location', 'promesasService', function ($scope, $http, $routeParams, $location, promesasService) {
        $scope.controller = "usuarioLoginController";
        $scope.usuario ="";
        
         promesasService.ajaxCheck()
         .then(function (response) {
             if(response.data.status=="200"){
                 $scope.session= true;
                 $scope.usuario=response.data.message;
             } else {
                 $scope.session= false;
             }
         }, function (response) {
             $scope.session= false;
         })

        $scope.login = function () {
            usuario = $scope.user.username;
            password = $scope.user.password;
            if (usuario != "" && password != "") {
                promesasService.ajaxLogin(usuario, password)
                    .then(function (response) {
                        $scope.session = true;
                        alert('Welcome: ' + usuario);
                        $location.path("/home/10/1");
                    }, function (response) {
                        $scope.session = false;
                        $scope.falloMensaje = response.data.message;
                    });
            }
        }



    }]
)
