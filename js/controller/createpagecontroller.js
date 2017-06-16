 'use Strict'


Newapp.controller('createpagecontroller', ["$scope", "$window", "$http", "$route", "$location", "$rootScope","$timeout",
	function ($scope, $route, $window, $http, $location, $rootScope,$timeout) {
console.log("create page contr")

$scope.createsubmit=function(){
  // window.location = window.location;
    //$window.location.reload(true);
    //  location.reload(true);
    $scope.idname=localStorage.getItem("idname");

  firebase.database().ref($scope.idname+'/' + $scope.name+'bdy').set({
     name:$scope.name,
  	DOB:$scope.DOB,
    Relationship:$scope.Relationship
  });
   //$location.path("#/list");
   $scope.getdatafromfirebase();
   $scope.changecontacturl(2);
}
}
]);




// $scope.createsubmit=function(){
//    $scope.idname="tamil";
//  $scope.setusername=($scope.name+"bdy")
//   firebase.database().ref($scope.idname+'/' + $scope.setusername).set({
//     name:$scope.name,
// 	DOB:$scope.DOB,
//     Relationship:$scope.Relationship
//   });
// console.log($scope.setusername)
// }