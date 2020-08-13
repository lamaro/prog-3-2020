<?php

include('conexiondb.php');

$artista = $_POST['artista'];
$codVideo = $_POST['codVideo'];
$nombreVideo = $_POST['nombreVideo'];
$posx = $_POST['posx'];
$posy = $_POST['posy'];

$sql = "INSERT INTO videos (artista, codVideo, nombreVideo, posx, posy) VALUES ($artista, $codVideo, $nombreVideo, $posx, $posy)";

function crearVideo($sql){
    $conexion = connectDB();
    if(mysqli_query($conexion,$sql)){
        echo "El video se creo correctamente";
    }else{
        echo "Ha ocurrido un error :( ";
    }
    disconnectDB($conexion);
}

crearVideo($sql);

?>
