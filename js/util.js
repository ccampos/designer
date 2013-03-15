define(function() {

	var buttons;

	var initialize = function(){

		$.ajax({
			url: '../json/buttons.json',
			async: false,
			dataType: 'json',
			success: function(data, status, jqXHR) {
				buttons = data;
			}
		});
	};

	var render = function() {
		$.each( buttons, function( index, value ) {

			var btnName = value.name;

			$('#container').append( '<div>' );

			var div = $('div')
				.last()
				.addClass( btnName )
				.text( btnName );


			$.data( div, btnName + index, btnName );

			console.log( $.data( div, btnName + index ) );
		});
	};

	return {
		initialize: initialize,
		render: render
	};
});