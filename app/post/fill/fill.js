var miControlador = miModulo.controller(
    "postFillController",
    function ($scope, $http, $routeParams, promesasService,auth,$location) {

        if (auth.data.status != 200) {
            $location.path('/login');
        } else {
            $scope.authStatus = auth.data.status;
            $scope.usuario = auth.data.message;
        }

       //--
       $scope.controller = "postFillController";
       //--
       $scope.mensaje = "";
       $scope.fallo = false;
       $scope.hecho = false;
       //--
       $scope.crear = function (numero) {
        promesasService.ajaxFill('post', numero).then(function (response) {
            if (response.data.status == 200) {
                $scope.fallo = false;
                $scope.hecho = true;
                $scope.mensaje = "Se han insertado todos los registros.";
            } else {
                $scope.fallo = true;
                $scope.hecho = true;
                $scope.mensaje = "No se ha podido realizar la operación.";
            }
        }, function () {
            $scope.fallo = true;
            $scope.hecho = true;
            $scope.mensaje = "No se ha podido realizar la operación.";
        });
    }
    //--
    $scope.volver = function () {
        window.history.back();
    };
    $scope.cerrar = function () {
        $location.path('/home/10/1');
    };


    }

)