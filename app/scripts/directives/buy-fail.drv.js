angular.module('directiveTalkApp')
.directive('buyFail', function(){
	
	return {
		link: function(scope, element, attrs) {
			element.bind("click", function(){

				alert("WOW!")
				element.addClass("btn-danger");


				scope.productName = "Really??";
				

				// 1. binding update problem 
				// 2. Scope problem 
				

			})
		}
	};
});