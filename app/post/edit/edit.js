var miControlador = miModulo.controller(
    "postEditController",
    ['$scope', '$http', '$routeParams', 'promisesServices', function ($scope, $http, $routeParams, promisesServices) {


        $scope.falloMensaje = "";

        promisesServices.ajaxGet('post', $routeParams.id)
            .then(function (response) {
                $scope.status = response.data.status;
                $scope.traerpost = response.data.response;
            }, function () {
            })

        $scope.update = function () {

            data = {
                id: $routeParams.id,
                titulo: $scope.titulo,
                cuerpo: $scope.cuerpo,
                etiquetas: $scope.etiquetas
            }
            var jsonToSend = { data: JSON.stringify(data) };

            $http.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
            promisesServices.ajaxUpdate('post', { params: jsonToSend })
                .then(function (response) {
                    if (response.data.status != 200) {
                        $scope.fallido = true;
                    }
                    $scope.hecho = true;
                }, function (error) {
                    $scope.fallido = true;
                    $scope.hecho = true;
                    $scope.falloMensaje = response.data.response;
                });
        };

        $scope.volver = function () {
            window.history.back();
        };

        $scope.reset = function () {
            promisesServices.ajaxGet('post', $routeParams.id)
                .then(function (response) {
                    const respuesta = response.data.response;
                    $scope.titulo = respuesta.titulo;
                    $scope.cuerpo = respuesta.cuerpo;
                    $scope.etiquetas = respuesta.etiquetas;
                    $scope.fecha = respuesta.fecha;
                }, function () {

                });
        }

        $scope.reset();

    }]

)