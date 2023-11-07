<?php
    include_once("../config.php");
    $pagSeleccionada = "login";
    $rol = "noSeguro"
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include($ESTRUCTURA . "/header.php"); ?>
    <link rel="stylesheet" type="text/css" href="<?php echo $CSS ?>/estilos.css">
</head>
<body>
    <?php include($ESTRUCTURA . "/cabecera.php"); ?>
    <div class="container text-center p-4 mt-3 cajaLista col-4">
        <h3>Iniciar Sesion</h3>
        <div>
            <form name="loginForm" id="loginForm" method="post" action="<?php echo $VISTA; ?>/accion/verificarLogin.php" class="mb-3">
                <label for="usNombre" class="form-label">Nombre de usuario</label>
                <input type="text" class="form-control" id="usNombre" name="usNombre" placeholder="Pepe" value="Nombre">
                <br>
                <label for="usPass" class="form-label">Contrase&ntilde;a</label>
                <input type="password" class="form-control" id="usPass" name="usPass" placeholder="****" value="12345abc">
                <input type="submit" value="Iniciar sesion" class="btn btn-success mt-4">
                <a href="<?php echo $VISTA; ?>/registrarse.php" class="btn btn-primary mt-4">Registrarse</a>
            </form>
        </div>
    </div>
    <?php include($ESTRUCTURA . "/pie.php"); ?>
</body>
</html>