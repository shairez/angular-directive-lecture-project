angular.module('directiveTalkApp')
.directive('buttonBar', function(){
	
	return {
		restrict: "E",
		controller: function($scope, $element, $attrs){
			$scope.buttonNames = [];
			this.addButton = function(name){
				$scope.buttonNames.push(name);
			}
		},
		transclude: true,
		template: "This bar contains the following buttons: {{buttonNames}} <div ng-transclude></div>",
		link: function(scope, element, attrs) {

		}
	};
})



.directive('innerButton', function(){
	
	return {
		restrict: "E",
		require: "^buttonBar",
		replace: true,
		scope: {
			whatToDo: "&",
		},
		template: "<button ng-click='handleClick()'><span ng-transclude></span></button>",
		transclude: true, 
		compile: function(tElement, tAttrs, transcludeFn){
			return function(scope, element, attrs, controller) {
						
						transcludeFn(scope, function(clone){
							controller.addButton( clone.html() )	
						})


						scope.handleClick = function(){
							scope.whatToDo({arg:'something cool'});
						}
						
					}
		},
		
	};
});




