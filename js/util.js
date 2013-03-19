define(function() {

	var buttons;

	var initialize = function(){

		$.ajax({
			// url: './json/buttons.json',
			url: './json/buttons2.json',
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

					// if descendants is not empty display and create new jquery object with data
					if (property === 'descendants') {
						console.log( value[ 'descendants' ] );
					};
					// if (!$.isEmptyObject( value[ 'descendants' ] ) ) {
					// 	iterateChildren( value[ 'descendants' ] );
					// };
				};
			});
		};
	};

	return {
		initialize: initialize,
		render: render
	};
});