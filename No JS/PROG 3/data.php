<?php 

header("Access-Control-Allow-Origin: *");
header("content-type: application/json");

include('conexiondb.php');

$posx = $_GET['posx'];
$posy = $_GET['posy'];

$sql = "SELECT * FROM videos WHERE posx = $posx AND posy = $posy";

function registrosVideos($sql){

$conexion = connectDB();

mysqli_set_charset($conexion, "utf8");

if(!$result = mysqli_query($conexion, $sql)) die(); 

$rawdata = array(); 
$i=0;
while($row = mysqli_fetch_array($result))
{
    $rawdata[$i] = $row;
    $i++;
}



disconnectDB($conexion);
return $rawdata;
}

$myArray = registrosVideos($sql);
echo json_encode($myArray);



?>