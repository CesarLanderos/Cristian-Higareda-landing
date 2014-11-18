jQuery(document).ready(function() {

	'use strict';

	$('#enviar').click( function( ) {

		$(this).prop('disabled',true);

		var nombre = $('#myModal .nombre').val(),
			correo = $('#myModal .email').val(),
			mensaje = $('#myModal .mensaje').val();

		$('.modal-body').fadeOut('slow', function() {

			$.get( '/ajax/correo.php?nombre=' + nombre +
				'&correo=' + correo + '&mensaje=' + mensaje,
			function(data) {

				if( data ){

					$('.modal-body')
						.fadeIn()
						.html('<span class="glyphicon glyphicon-ok"></span>' +
							' ¡Enviado!');

				}

			});

		});

	});
});
