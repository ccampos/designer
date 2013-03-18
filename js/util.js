define(function() {

	var buttons;

	var initialize = function(){

		$.ajax({
			url: './json/buttons.json',
			async: false,
			dataType: 'json',
			success: function(data, status, jqXHR) {
				buttons = data;
			}
		});
	};

	var render = function() {
/*		$.each( buttons, function( index, value ) {

			var name = value.name;

			$('#container').append( '<div>' );

			$('div')
				.last()
				.attr( 'ref', name )
				.text( name )
				.data( value );

			if (!$.isEmptyObject( value.descendants )) {
				console.log( value.name, ': ', value.descendants );
			};
		});*/
		iterateChildren( buttons );

		function iterateChildren( buttons ) {
			$.each( buttons, function( index, value ) {
				for ( var property in value ) {
					console.log( property, ': ', value[ property ] );
					if (!$.isEmptyObject( value[ 'descendants' ] ) ) {
						iterateChildren( value[ 'descendants' ] );
					};
				};
			});
			console.log('*************************');
		};
	};

	return {
		initialize: initialize,
		render: render
	};
});