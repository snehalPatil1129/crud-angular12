 angular.module("bookApp").controller('createController' ,function ($scope ,$http) {
            $scope.bookArray = [];
            $http.post("http://localhost:4000/api/books")
            .then(function mySuccess(response) {
                $scope.myWelcome = response.data;
            },  
             function myError(response) {
                 $scope.myWelcome = response.statusText;
            });
});








 // $scope.userData = {};
            // $scope.submitForm = function(isValid)
            // {
            //     if(isValid){
            //     $scope.displayArray.push($scope.userData.firstName);
            //     $scope.displayArray.push($scope.userData.lastName);
            //     $scope.displayArray.push($scope.userData.email);
            //     $scope.displayArray.push($scope.userData.phoneNumber);
            //     $scope.displayArray.push($scope.userData.gender);
            //     $scope.displayArray.push($scope.userData.location);

    //          }
    //         console.log($scope.displayArray);
    // };

//     $scope.reset = function() {
//     $scope.displayArray = {};
// };