<?php

if( isset($_GET['correo'])){
	$regresa = mail('hola@cristianhigareda.com', 'Contacto WEB', $_GET['mensaje'], "From: " . $_GET['nombre'] . "<" . $_GET['correo'] . ">");
	echo $regresa;
}