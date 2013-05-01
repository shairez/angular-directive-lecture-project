'use strict';

angular.module('directiveTalkApp')
  .controller('MainCtrl', function ($scope) {
   
  	$scope.productName = "Iron Man Underpants";


  	$scope.doSomethingCool = function(msg){
  		alert(msg);
  	}

  });
