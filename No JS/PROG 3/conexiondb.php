<?php 

function connectDB(){
    $server = "localhost";
    $database = "videosmood";
    $user = "root";
    $pass = "";
    $conexion = mysqli_connect($server,$user,$pass,$database);

    if($conexion){
        //echo "La conexión se realizó correctamente";
    }else{
        echo "Ha ocurrido un problema :( ";
    }
    return $conexion;
}

function disconnectDB($conexion){
    $close = mysqli_close($conexion);
    if($close){
        //echo "La conexión se cerro!";
    }else{
        echo "Ha ocurrido un problema :( ";
    }
    return $close;
}
?>