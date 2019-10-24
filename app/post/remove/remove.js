var miControlador = miModulo.controller(
    "postRemoveController",
    ['$scope', '$http', '$routeParams', '$route','$location', function ($scope, $http, $routeParams, $route, $location) {
        $http({
            method: 'GET',
            url: 'http://localhost:8081/blogbuster/json?ob=post&op=get&id=' + $routeParams.id
        }).then(function (response) {
            $scope.status = response.data.status;
            $scope.traerpost = response.data.response;
        }, function () {
        })

        $scope.remove = function(){
            $http({
            method: 'GET',
            url: 'http://localhost:8081/blogbuster/json?ob=post&op=remove&id='+ $routeParams.id
            }).then(function successCallback(response) {
                    alert('Registro eliminado correctamente.');
                    $location.path("/");
            }); 
        }
    }]
)