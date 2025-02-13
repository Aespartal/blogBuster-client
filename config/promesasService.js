miModulo.factory('promesasService', ['$http',
    function ($http) {
        return {
            ajaxGet: function (objeto,identificador){
                return  $http.get('http://localhost:8081/blogbuster/json?ob='+objeto+'&op=get&id=' + identificador);
            },
            ajaxUpdate: function (objeto,datos){
                return $http.get('http://localhost:8081/blogbuster/json?ob='+objeto+'&op=update', datos);
            },
            ajaxNew: function(objeto,datos){
                return $http.get('http://localhost:8081/blogbuster/json?ob='+objeto+'&op=insert', datos);
            },
            ajaxGetCount: function(objeto){
                return $http.get('http://localhost:8081/blogbuster/json?ob='+objeto+'&op=getcount');
            },
            ajaxGetPage: function(objeto,rpp,page){
                return $http.get('http://localhost:8081/blogbuster/json?ob='+objeto+'&op=getpage&rpp=' + rpp + '&page=' + page);
            },
            ajaxRemove: function(objeto,identificador){
                return $http.get('http://localhost:8081/blogbuster/json?ob='+objeto+'&op=remove&id='+ identificador);
            },
            ajaxLogin: function (username, password) {
                return $http.get('http://localhost:8081/blogbuster/json?ob=usuario&op=login&username=' + username + '&password=' + forge_sha256(password));
            },
            ajaxLogout: function () {
                return $http.get('http://localhost:8081/blogbuster/json?ob=usuario&op=logout');
            },
            ajaxCheck: function () {
                return $http.get('http://localhost:8081/blogbuster/json?ob=usuario&op=check');
            },
            ajaxFill: function (objeto, number) {
                return $http.get('http://localhost:8081/blogbuster/json?ob=' + objeto + '&op=fill&number=' + number);
            },
            ajaxSearch: function (objeto,rpp,page,word) {
                return $http.get('http://localhost:8081/blogbuster/json?ob='+objeto+'&op=getpage&rpp=' + rpp + '&page=' + page + '&filter='+ word);
            }
        }
    }])
