var miControlador = miModulo.controller(
    "postRemoveController",
    ['$scope', '$routeParams','$location','promisesServices', function ($scope, $routeParams, $location,promisesServices) {
        
        $scope.hecho=false;
        $scope.fallo=false;

        promisesServices.ajaxGet('post',$routeParams.id)
        .then(function (response) {
            $scope.status = response.data.status;
            $scope.traerpost = response.data.response;
        }, function () {
        })

        $scope.remove = function(){
            promisesServices.ajaxRemove('post', $routeParams.id)
            .then(function (response) {
                    alert('Registro eliminado correctamente.');
                    $location.path("/post/plists/10/1");
                    $scope.hecho=true;
            }, function () {
                $scope.fallo=true;
                $scope.falloMensaje = response.data.response;
            }); 
        }
    }]
)