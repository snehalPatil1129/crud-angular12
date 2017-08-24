var app = angular.module("bookApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider 
    .when("/getbooks", {
        templateUrl : "getTable.html" ,
        controller :"getTableController"
        
    })
    // .when("/createnew", {
    //     templateUrl : "createBook.html",
    //     controller : "createController"
    // })
    // .when("/editBook", {
    //     templateUrl : "editBook.html",
    //     controller :"editController"
    // })
    // .when("/deleteBook", {
    //     controller :"createController"
    // })
    // .when("/viewBook", {
    //     templateUrl : "getBook.html",
    //     controller :"getBookController"
    // })
    
    .otherwise({redirectTo:'/getbooks'
})
    });
