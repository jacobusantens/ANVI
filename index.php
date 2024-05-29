<?php

$email = $_POST['email'];
$para = 'llanvicom@gmail.com';
$titulo = 'Questionario- .ANVI';

$msjCorreo = "E-Mail: $email\n";
 
if ($_POST['submit']) {
if (mail ($para, $titulo, $msjCorreo)) {
echo 'El mensaje se ha enviado';
} else {
echo 'Falló el envio';
}
}

?>