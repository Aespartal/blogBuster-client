miModulo.factory('promisesServices', [$http, function($http){
    return {
        ajaxGet: function (objeto,identificador){
            return  $http.get('http://localhost:8081/blogbuster/json?ob='+objeto+'&op=get&id=' + identificador);
        },
        ajaxUpdate: function (objeto,datos){
            return $http.get('http://localhost:8081/blogbuster/json?ob='+objeto+'&op=update', datos);
        },
        ajaxNew: function(objeto,datos){
            return $http.post('http://localhost:8081/blogbuster/json?ob='+objeto+'&op=insert', datos);
        },
        ajaxGetCount: function(objeto){
            return $http.get('http://localhost:8081/blogbuster/json?ob='+objeto+'&op=getcount');
        },
        ajaxGetPage: function(objeto,rpp,page){
            return $http.get('http://localhost:8081/blogbuster/json?ob='+objeto+'t&op=getpage&rpp=' + rpp + '&page=' + page);
        },
        ajaxRemove: function(objeto,identificador){
            return $http.get('http://localhost:8081/blogbuster/json?ob='+objeto+'t&op=remove&id='+ identificador);
        }

    }
}])
