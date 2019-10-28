var miControlador = miModulo.controller(
    "blogController",
    ['$scope', '$http', '$routeParams', '$window', function ($scope, $http, $routeParams, $window) {
        $scope.paginaActual = parseInt($routeParams.page);
        $scope.rppActual = 10;
        $scope.sitio = "blog";
        $scope.campo = $routeParams.order;
        $scope.direction = $routeParams.direction;
        $http({
            method: 'GET',
            url: 'http://localhost:8081/blogbuster/json?ob=post&op=getpage&rpp=' + $routeParams.rpp + '&page=' + $routeParams.page
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
            $scope.numPaginas = Math.ceil($scope.numRegistros / $scope.rppActual);

            paginacion(2);
            if ($scope.paginaActual > $scope.numPaginas) {
                $window.location.href = `#!/${$scope.rppActual}/${$scope.numPaginas}`;
            } else if ($routeParams.page < 1) {
                $window.location.href = `#!/${$scope.rppActual}/1`;
            }
        }, function () {
        })

        function paginacion(vecindad) {
            vecindad++;
            $scope.botonera = [];
            for (i = 1; i <= $scope.numPaginas; i++) {
                if (i == 1) {
                    $scope.botonera.push(i);
                } else if (i > ($scope.paginaActual - vecindad) && i < ($scope.paginaActual + vecindad)) {
                    $scope.botonera.push(i);
                } else if (i == $scope.numPaginas) {
                    $scope.botonera.push(i);
                } else if (i == ($scope.paginaActual - vecindad) || i == ($scope.paginaActual + vecindad)) {
                    $scope.botonera.push('...');
                }
            }
        }




    }]
)