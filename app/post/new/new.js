var miControlador = miModulo.controller(
    "postNuevoController",
    ['$scope', '$http', function ($scope, $http) {
        $scope.sitio = "new";

        $scope.new = function() {
            var jsonToSend = {data: JSON.stringify($scope.post)};
            $http.post("http://localhost:8081/blogbuster/json?ob=post&op=insert", {params: jsonToSend})
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