var miControlador = miModulo.controller(
    "plistController",
    ['$scope', '$http', 'miServicio01', function ($scope, $http, myService) {


         //opciones de registro pagina
         $scope.typeOptions = [
            { name: '5', value: '5' },
            { name: '10', value: '10' },
            { name: '15', value: '15' }
        ];

        $scope.form = { type: $scope.typeOptions[0].value };
      
        //Paginacion variables.
        var posts = [];
        $scope.paginaActual = 1;
        $scope.filtradoPosts = [];
        $scope.maxSize = 5;
       
        var rpp =  $scope.form.type;
         //registros por pagina
         var url2 = "http://localhost:8081/blogbuster/json?ob=post&op=getpage&rpp=" + rpp + "&page=" + $scope.paginaActual
         posts = function () {
             $http.get(url2).then(function (res) {
                console.log(res.data.response);   
              return res.data.response;
         });
        }

         var url1 = "http://localhost:8081/blogbuster/json?ob=post&op=getcount";
         //numero de paginas 
         $scope.numOfPages = function () {$http.get(url1).then(function (res) {
             $scope.count = res.data.response;
             return $scope.count / $scope.form.type;
         
         })
         }

        $scope.$watch('paginaActual + rpp', function() {
            comienzo = parseInt(($scope.paginaActual - 1) * rpp),
            final = parseInt(comienzo + rpp);
            $scope.filtradoPosts =  posts.slice(comienzo, final);
           
          });
      
     

       
     

       
      
    }]
)
