var miControlador = miModulo.controller(
    "postPlistController",
    ['$scope', '$routeParams', 'promesasService', function ($scope, $routeParams, promesasService) {
          
        promesasService.ajaxCheck()
        .then(function (response) {
            if(response.data.status=="200"){
                $scope.session= true;
                $scope.usuario=response.data.message;
            } else {
                $scope.session= false;
            }
        }, function (response) {
            $scope.session= false;
        })

        $scope.paginaActual = parseInt($routeParams.page);
        $scope.rppActual = parseInt($routeParams.rpp);
        $scope.rppS = [10, 50, 100];
        $scope.controller = "postPlistController";

            if ($scope.order == null || $scope.colOrder == null) {
                request = "http://localhost:8081/blogbuster/json?ob=post&op=getpage&page=" + $scope.paginaActual + "&rpp=" + $scope.rppActual;
            } else {
                request = "http://localhost:8081/blogbuster/json?ob=post&op=getpage&page=" + $scope.paginaActual + "&rpp=" + $scope.rppActual + "&order=" + $scope.colOrder + "," + $scope.order
            }

            $http({
                method: "GET",
                withCredentials: true,
                url: request
            }).then(function (response) {
                $scope.status = response.data.status;
                $scope.pagina = response.data.message;
            });
    
            $scope.showSelectValue = function (mySelect) {
                $window.location.href = `/blogBuster-client/#!/post/plist/`+mySelect+`/1`;
            }

        promesasService.ajaxGetCount('post')
            .then(function (response) {
                $scope.status = response.data.status;
                $scope.numRegistros = response.data.message;
                $scope.numPaginas = Math.ceil($scope.numRegistros / $routeParams.rpp);
                $scope.calcPage = [];
                for (const p of $scope.rppS) {
                    const res = $scope.paginaActual / $scope.numPaginas;
                    const next = Math.ceil($scope.numRegistros / p);               
                    $scope.calcPage.push(Math.ceil(res * next));             
                }
                paginacion(2);
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