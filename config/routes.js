miModulo.config(['$routeProvider',function($routeProvider){

    $routeProvider.when('/',{templateUrl:'app/homeTemplate.html',controller:'homeController'})
    
    $routeProvider.when('/new',{templateUrl:'app/post/new/newTemplate.html',controller:'newController'})
    $routeProvider.when('/edit',{templateUrl:'app/post/edit/editTemplate.html',controller:'editController'})
    $routeProvider.when('/remove',{templateUrl:'app/post/remove/removeTemplate.html',controller:'removeController'})
    $routeProvider.when('/plist',{templateUrl:'app/post/plist/plistTemplate.html',controller:'plistController'})
    $routeProvider.when('/view',{templateUrl:'app/post/view/viewTemplate.html',controller:'viewController'})

    $routeProvider.otherwise({redirectTo:'/'})


}])