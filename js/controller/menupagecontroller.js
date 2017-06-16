 'use Strict'


Newapp.controller('menupagecontroller', ["$scope", "$window", "$http", "$location", "$rootScope","$timeout",
	function ($scope, $window, $http, $location, $rootScope,$timeout) {
console.log("listpage contr")




// $scope.urls=$scope.template[2];
// $scope.changecontacturl=function(value){
//     $scope.urls=$scope.template[value];
//      $(".panel").hide();
//          $(".container").removeClass("open-sidebar");
//          $("#nav-icon1").removeClass('open');
//          return false;
// }



//for accordion in side menu
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

//-------------------------------------------------<<<<<>>>>>>-----------------------------------------------------------
//for side menu
        $("[data-toggle]").click(function() {
        var toggle_el = $(this).data("toggle");
          $(toggle_el).toggleClass("open-sidebar");
          	$("#nav-icon1").toggleClass('open');
        });
   
         $(".swipe-area").swipe({
              swipeStatus:function(event, phase, direction, distance, duration, fingers)
                  {  
                      if (phase=="move" && direction =="right") {
                          console.log("getdata true")
                           $(".container").addClass("open-sidebar");
                           	$("#nav-icon1").addClass('open');
                           return false;
                      }
                      if (phase=="move" && direction =="left") {
                           $(".container").removeClass("open-sidebar");
                           $("#nav-icon1").removeClass('open');
                           return false;
                      }
                  }
          }); 
          
        //  $scope.template=[" ./data/changepassword/changepassword.html ","./data/detailedlistpage/detailedlistpage.html","hs","ab","a"]
 $scope.template=["./data/createpage/createpage.html","./data/editpage/editpage.html","./data/detailedlistpage/detailedlistpage.html","./data/viewpage/viewpage.html"];
 $scope.headertemp=["Add New Reminder","Edit Details","List Of Birthdays","profile"]
 $scope.urls=$scope.template[2];
 $scope.headers=$scope.headertemp[2];
 $scope.changecontacturl = function(a) {
     $scope.headers=$scope.headertemp[a];
      $scope.urls=$scope.template[a];
        $(".panel").hide();
         $(".container").removeClass("open-sidebar");
         $("#nav-icon1").removeClass('open');
         return false;
    };

}
]);




