var miControlador = miModulo.controller(
    "homeController",
    ['$scope', '$http','$routeParams', function ($scope, $http, $routeParams) {
        $scope.sitio = "blog";
        $scope.paginaActual = $routeParams.page;
        $routeParams.rpp=10;

        $http({
            method: 'GET',
            url: 'http://localhost:8081/blogbuster/json?ob=post&op=getpage&rpp=10&page=' + $routeParams.page
        }).then(function (response) {
            $scope.status = response.data.status;
            $scope.pagina = response.data.response;
        }, function () {
        })

        $http({
            method: 'GET',
            url: 'http://localhost:8081/blogbuster/json?ob=post&op=getcount'
        }).then(function (response) {
            $scope.status = response.data.status;
            $scope.numRegistros = response.data.response;
            $scope.numPaginas = Math.ceil($scope.numRegistros / $routeParams.rpp);
            paginacion();
        }, function () {
        })

        paginacion = function () {
            $scope.botonera = [];
            for (i = 1; i <= $scope.numPaginas; i++) {
                if (i == 1) {
                    $scope.botonera.push(i);
                }
                if (i == $scope.paginaActual && i-3> 1) {
                    $scope.botonera.push("...");
                }
                if (i == $scope.paginaActual && i-2> 1) {
                    $scope.botonera.push(i-2);
                }
                if (i == $scope.paginaActual && i-1> 1) {
                    $scope.botonera.push(i-1);
                }
                if (i == $scope.paginaActual && i != 1) {
                    $scope.botonera.push(i);
                }
                if (i == $scope.paginaActual && i+1< $scope.numPaginas) {
                    $scope.botonera.push(i+1);
                }
                if (i == $scope.paginaActual && i+2< $scope.numPaginas) {
                    $scope.botonera.push(i+2);
                }
                if (i == $scope.paginaActual && i+3< $scope.numPaginas) {
                    $scope.botonera.push("...");
                }
                if (i == $scope.numPaginas && i != 1 && i != $scope.paginaActual) {
                    $scope.botonera.push(i);
                }
            }
        }

    }]
)
