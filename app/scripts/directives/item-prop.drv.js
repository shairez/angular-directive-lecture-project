angular.module('directiveTalkApp')
.directive('itemProp', function(){
	
	return {
		restrict: "ACME",
		template: "<div cool-alert='We have more sizes!'><h3><strong>Size:</strong> 10</h3></div>",
		replace: true, 
		link: function(scope, element, attrs) {
		}
	};
});


/*
	1. different options
	2. property
	3. templateUrl
	4. transclude

*/
































/*

	

	templateUrl: "views/item-prop.tpl.html"

*/