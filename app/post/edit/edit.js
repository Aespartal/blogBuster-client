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
 
            $http({
                method: 'POST',
                data: $scope.post,
                url: 'http://localhost:8081/blogbuster/json?ob=post&op=update'

            }).then(function (response) {
                $scope.status = response.data.status;
                $scope.traerpost = response.data.response;
            }, function () {
            })
        }


    }]

)