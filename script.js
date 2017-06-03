var myApp = angular.module("myfile",[]);

myApp.controller("myCtrl",function($scope,$http){
        $http.get("data.json").then(function(response){
        	$scope.car = response.data.cars;
        });
});