var miControlador = miModulo.controller(
    "postViewController",
    ['$scope', '$routeParams','promisesServices', function ($scope, $routeParams,promisesServices) {
        promisesServices.ajaxGet('post', $routeParams.id)
        .then(function (response) {
            $scope.status = response.data.status;
            $scope.traerpost = response.data.response;
        }, function () {
        })
    }]
)
