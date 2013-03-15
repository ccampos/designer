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
		$.each( buttons, function( index, value ) {

			var btn = {
				name: value.name,
				descendants: value.descendants
			};

			$('#container').append( '<div>' );

			$('div')
				.last()
				.attr( 'ref', btn.name )
				.text( btn.name )
				.data( btn.name, btn );
		});
	};

	return {
		initialize: initialize,
		render: render
	};
});