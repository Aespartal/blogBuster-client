var miControlador = miModulo.controller(
    "postNewController",
    ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $scope.new = function(data) {
            data = {data:$scope.post}
            $http.post("http://localhost:8081/blogbuster/json?ob=post&op=insert", data)
         .then(function successCallback(response) {
             $scope.status = response.data.status;
            alert($scope.status);
         }, function errorCallback(response) {
            alert("No funciona");
         })
        }    
    }]
)