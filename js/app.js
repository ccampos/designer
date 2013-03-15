define([
	'util'
], function(util) {
	var initialize = function(){
		util.initialize();
		util.render();	
	};

	return {
		initialize: initialize
	};
});