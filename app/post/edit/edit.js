var miControlador = miModulo.controller(
    "postEditController",
    ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

        $http({
            method: 'GET',
            url: 'http://localhost:8081/blogbuster/json?ob=post&op=get&id=' + $routeParams.id
        }).then(function (response) {
            $scope.status = response.data.status;
            $scope.traerpost = response.data.response;
        }, function () {
        })

        $scope.update = function(){

            data = {
                id: $routeParams.id,
                titulo: $scope.titulo,
                cuerpo: $scope.cuerpo,
                etiquetas: $scope.etiquetas
            }
            var jsonToSend = {data: JSON.stringify(data)};
            $http.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
            $http.get('http://localhost:8081/blogbuster/json?ob=post&op=update', {params: jsonToSend})
            .then(function (response) {
                if (response.data.status == 500) {
                    $scope.fallido = true;
                }
                $scope.hecho = true;
            }, function (error) {
                $scope.fallido = true;
                $scope.hecho = true;
            });
        };

        $scope.volver = function () {
            window.history.back();
        };

        $scope.reset = function() {
            $http({
                method: 'POST',
                url: `http://localhost:8081/blogbuster/json?ob=post&op=get&id=${$routeParams.id}`
            }).then(function (response) {
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