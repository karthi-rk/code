
var Newapp = angular.module('birthday-app', ['ngRoute']);
//ngAnimate
Newapp.filter('secondsToDateTime', [function() {
    return function(seconds) {
        return new Date(1970, 0, 1).setSeconds(seconds);
    };
}])

function toTimeLeft(t) {
                    var days, hours, minutes, seconds;
  
                    //display the words "days", "Hours" etc.
                    var daysD = ' day', hoursD = ' hour', minutesD = ' minute', secondsD = ' second';
                    days = Math.floor(t / 86400);
                    t -= days * 86400;
                    hours = Math.floor(t / 3600) % 24;
                    t -= hours * 3600;
                    minutes = Math.floor(t / 60) % 60;
                    t -= minutes * 60;
                    seconds = t % 60;
  
                    //Add an 's' on the end if it's not 1
                    if (seconds !== 1){secondsD += 's';}
                    if (minutes !== 1){minutesD += 's';}
                    if (hours   !== 1){hoursD   += 's';}
                    if (days    !== 1){daysD    += 's';}
  
                    // padding the numbers 
                    return [
                        pad(days, 1)    + daysD,
                        pad(hours, 2)   + hoursD,
                        pad(minutes, 2) + minutesD,
                        pad(seconds, 2) + secondsD
                    ].join(', ');
                };
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
Newapp.filter('timeleft', function() {
  function isInteger(x) {
        return x % 1 === 0;
    }
 
  return function(value) {
    if (value && isInteger(value))
      return  toTimeLeft(value);
    
    return value;
  };

});

var base_url = "https://product-management-agilexcyber.c9users.io/";
var log_debug = false;

Newapp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'data/homepage/home.html',
		controller: ''
	}).when('/edit', {
		templateUrl: 'data/editpage/editpage.html',
		controller: ''
		
	}).when('/list', {
		templateUrl: 'data/menupage/menupage.html',
		controller: 'menupagecontroller'
		
	}).when('/create', {
		templateUrl: 'data/createpage/createpage.html',
		controller: 'createpagecontroller'
		
	}).otherwise({
		redirectTo: '/'
	});
}]);
