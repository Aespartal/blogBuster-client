var miControlador = miModulo.controller(
    "postViewController",

        function ($scope, $routeParams, promesasService,auth) {
            $scope.authStatus = auth.data.status;
            $scope.usuario = auth.data.message;
   

            promesasService.ajaxGet('post', $routeParams.id)
                .then(function (response) {
                    $scope.id = response.data.message.id;
                    $scope.titulo = response.data.message.titulo;
                    $scope.cuerpo = response.data.message.cuerpo;
                    $scope.etiquetas = response.data.message.etiquetas;
                }, function () {
                    $scope.fallo = true;
                })
        }
)
