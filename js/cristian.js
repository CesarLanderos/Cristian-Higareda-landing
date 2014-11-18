jQuery(document).ready(function($) {
	$("#enviar").click(function(event) {
		
		$(this).prop('disabled',true);

		var nombre = $("#nombre").val();
		var correo = $("#email").val();
		var mensaje = $("#mensaje").val();

		$(".modal-body").fadeOut('slow', function() {
			$.get('/ajax/correo.php?nombre=' + nombre + '&correo=' + correo + '&mensaje=' + mensaje, function(data) {
				console.log('/ajax/correo.php?nombre=' + nombre + '&correo=' + correo + '&mensaje=' + mensaje);
				if( data ){
					$(".modal-body").fadeIn().html('<span class="glyphicon glyphicon-ok"></span> ¡Enviado!');
				}
			});
		});

		

		/* Act on the event */
	});
});