angular.module("bookApp").controller('getTableController' ,function ($scope ,$http) {
            // $scope.bookArray = [];
            
                 $http.get("http://localhost:4000/api/books")
                .then(function(response)
                {
                $scope.bookArray=response.data;
            //  bookService.gtB();
                })
            
            
});
