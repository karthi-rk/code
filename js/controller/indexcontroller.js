 'use Strict'


Newapp.controller('indexcontroller', ["$scope", "$window", "$http", "$location", "$rootScope", "$timeout","$interval",
	function ($scope, $window, $http, $location, $rootScope, $timeout,$interval) {
        
$scope.idname=localStorage.getItem("idname");
if(!$scope.idname){
    
    $scope.idname = prompt("Please enter your name", "");
    if ( $scope.idname != null) {
       
       localStorage.setItem("idname", $scope.idname);
    }

}
$scope.idname=localStorage.getItem("idname");


// myFunction();
// 		function myFunction() {
//     var person = prompt("Please enter your name", " ");
//      $scope.idname=person;
// }
console.log("hu")
$scope.add=function(){
    console.log("add")
}
//--------------------------------------------------------------------------
$scope.year="2018";
$scope.day="2018";
$scope.month="2018";
$scope.hours="2018";


// var a = new Date().getHours(); // Now
var b = new Date($scope.year, $scope.day, $scope.month ,$scope.hours, $scope.minutes, $scope.seconds).getHours();
//var b = new Date(year, day, month ,hours, minutes, seconds).getHours(); // 2010
// var d = (b-a);
// console.log(Math.round(d/(1000*60*60*23)));
// console.log(Math.round(d/(1000)));
// console.log(a);
// console.log(b);
// $scope.date="9";

// $scope.twoDaysFromNow = Math.floor(Date.now() / 1000) + ( 60 * 60 * 24 * $scope.date );// change this for date
//     $scope.goal = ($scope.twoDaysFromNow);
//     $scope.now  = Math.floor(Date.now() / 1000);
//     $scope.time = $scope.goal - $scope.now;
  
  
//     $interval(function(){   
//         $scope.now  = Math.floor(Date.now() / 1000);
//         $scope.time = $scope.goal - $scope.now;
//     },1000,0);



//-----------------------------------------------------------------------------
   


		 
    var config = {
    apiKey: "AIzaSyA-Wjiepu8Y8Ua8-oNjFUQstdPq2hvlwgg",
    authDomain: "design-and-development-b8309.firebaseapp.com",
    databaseURL: "https://design-and-development-b8309.firebaseio.com",
    projectId: "design-and-development-b8309",
    storageBucket: "design-and-development-b8309.appspot.com",
    messagingSenderId: "669529186726"
  };
  firebase.initializeApp(config);
  

 firebase.auth().signInWithEmailAndPassword("karthik@gmail.com", "1234567890").catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});

//  var username="tamilbdy"
//   firebase.database().ref(idname+'/' + username).set({
//     name:"tamil",
// 	DOB:"06/09/1987",
//   });

 //firebase.database().ref( "tamil"+'/').remove();

// console.log("home")
    const messaging = firebase.messaging();
  messaging.requestPermission()
.then(function() {
  console.log('Notification permission granted.');
  // TODO(developer): Retrieve an Instance ID token for use with FCM.
  // ...
})
.catch(function(err) {
  console.log('Unable to get permission to notify.', err);
});


// messaging.onMessage(function(payload) {
//   console.log("Message received. ", payload);
//   // ...
// });

  // Get Instance ID token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.
//   messaging.getToken()
//   .then(function(currentToken) {
//     if (currentToken) {
//       sendTokenToServer(currentToken);
//       updateUIForPushEnabled(currentToken);
//     } else {
//       // Show permission request.
//       console.log('No Instance ID token available. Request permission to generate one.');
//       // Show permission UI.
//       updateUIForPushPermissionRequired();
//       setTokenSentToServer(false);
//     }
//   })
//   .catch(function(err) {
//     console.log('An error occurred while retrieving token. ', err);
//     showToken('Error retrieving Instance ID token. ', err);
//     setTokenSentToServer(false);
//   });




$scope.getdatafromfirebase=function(){
 firebase.database().ref( $scope.idname+'/').once('value').then(function(snapshot) {
  $scope.$apply(function () {
     $scope.username = snapshot.val();
console.log( $scope.username)
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
  });
	});
 
}
$scope.getdatafromfirebase();

// $scope.$on("myEvent", function (event, args) {
//    $scope.rest_id = args.username;
//    $scope.getMainCategories();
// });
$(".fulllist").click(function(){
    console.log("clicked")
//   idname=  $(this).attr("id");
//    $scope.usernamecopy=$scope.username.filter(function(data){
//      return data.name==idname?data:"";
//    });
//    console.log($scope.usernamecopy);
//    console.log($scope.username);
});

 



	
			  // console.log($scope.username.DOB)
//   getAge( $scope.username.DOB); //month/date/year




//-------------------------------------------------<<<<<>>>>>>-----------------------------------------------------------
$scope.todaydate = new Date();
console.log($scope.todaydate)
}
]);