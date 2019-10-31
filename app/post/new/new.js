var miControlador = miModulo.controller(
    "postNewController",
    ['$scope', '$http','promisesServices', function ($scope, $http, promisesServices) {
        $scope.controller = "postNewController";

        $scope.new = function() {
            var jsonToSend = {data: JSON.stringify($scope.post)};
            $http.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
            promisesServices.ajaxNew('post',{params: jsonToSend})
         .then(function successCallback(response) {
            if (response.data.status != 200) {
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