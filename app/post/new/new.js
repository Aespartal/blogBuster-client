var miControlador = miModulo.controller(
    "postNewController",
    ['$scope', '$http', function ($scope, $http) {
        $scope.sitio = 'new';
        $scope.hecho = false;
        $scope.fallido = false;
        $scope.new = function() {
            const datos = {
                titulo: $scope.titulo,
                cuerpo: $scope.cuerpo,
                etiquetas: $scope.etiquetas
            }
            var jsonToSend = {data: JSON.stringify(datos)};
            $http.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
            $http.get("http://localhost:8081/blogbuster/json?ob=post&op=insert",{params: jsonToSend})
         .then(function successCallback(response) {
            if (response.data.status == 500) {
                $scope.fallido = true;
            }
            $scope.hecho = true;
         }, function errorCallback(error) {
            $scope.fallido = true;
            $scope.hecho = true;
         })
        }    
    }]
)