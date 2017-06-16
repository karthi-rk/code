 'use Strict'


Newapp.controller('detailedlistcontroller', ["$scope", "$window", "$http", "$location", "$rootScope","$timeout",
	function ($scope, $window, $http, $location, $rootScope,$timeout) {
console.log("detail contr")


    $scope.idname=localStorage.getItem("idname");
 firebase.database().ref($scope.idname+'/').once('value').then(function(snapshot) {
  $scope.username = snapshot.val();
  console.log($scope.username)
	});
 $scope.view=[];

$(".fulllist").click(function(){
  idname=  $(this).attr("id");

   var newObject = Object.keys($scope.username).map(function(a) {
			dateString=($scope.username[a].DOB)
			$scope.today = new Date();
			$scope.birthDate = new Date(dateString);
			$scope.age = $scope.today.getFullYear() -  $scope.birthDate.getFullYear();
			
			var m = $scope.today.getMonth() - $scope.birthDate.getMonth();
			if (m < 0 || (m === 0 && $scope.today.getDate() <  $scope.birthDate.getDate())) {
				$scope.age--;
			}
            console.log($scope.username[a].DOB.slice(0,5))
			return $scope.username[a]['age']=$scope.age;
			 
	 });

   $scope.usernamecopy = Object.keys($scope.username).map(function(a){
     dateString1=($scope.username[a].name);
     return dateString1==idname? $scope.view.push($scope.username[a]):"";
   });
  localStorage.setItem("view", JSON.stringify($scope.view));

});

$scope.detailsview=JSON.parse(localStorage.getItem("view"));
console.log($scope.detailsview)


}
]);




