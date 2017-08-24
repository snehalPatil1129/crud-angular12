angular.module("bookApp").controller('editController' ,function ($scope ,$http) {
            $scope.bookArray = [];
            $http.put("http://localhost:4000/api/books")
            .then(function mySuccess(response) {
                $scope.bookArray = response.data;
            },  
             function myError(response) {
                 $scope.bookArray = response.statusText;
            });
});
