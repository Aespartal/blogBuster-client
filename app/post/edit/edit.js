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
                id:$routeParams.id,
                titulo:$scope.post.titulo,
                cuerpo:$scope.post.cuerpo,
                etiquetas:$scope.post.etiquetas
            }
            $http({
                method: 'POST',
                data: data,
                url: 'http://localhost:8081/blogbuster/json?ob=post&op=update'

            }).then(function (response) {
                $scope.status = response.data.status;
                $scope.traerpost = response.data.response;
            }, function () {
            })
        }


    }]

)