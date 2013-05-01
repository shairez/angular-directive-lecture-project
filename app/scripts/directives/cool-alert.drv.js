angular.module('directiveTalkApp')
.directive('coolAlert', function(){
	
	return {
		link: function(scope, element, attrs, controller) {

			element.css("cursor", "pointer");
			
			element.bind("click", function(){
				alert(attrs.coolAlert);
			})

		}
	};
});