<?php include('header.php');?>
    <div id="contenido">
    <div id="matriz">
        <?php for ($i=1; $i <= 10; $i++) { ?>
            <div class="fila">
                <?php for ($j=1; $j <= 10; $j++) { ?>
                    <div class="celda" data-posx="<?php echo($i);?>" data-posy="<?php echo($j);?>">
                          
                    </div>
                <?php } ?>
            </div> <!-- #fila -->
        <?php } ?>
    </div> <!-- #matriz -->
        <div id="video_destacado" class="grid-item">
        <iframe id="player" width="500" height="315" src="https://www.youtube.com/embed/VJDJs9dumZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div id="form_carga_video" class="grid-item">
        <form action="http://localhost:8080/moodPlayerBlank/alta.php" id="searchForm" method="POST">
            <input type="text" name="posx" placeholder="pos X">
            <input type="text" name="posy" placeholder="pos Y">
            <input type="text" name="artista" placeholder="Artista">
            <input type="text" name="nombreVideo" placeholder="Nombre Video">
            <input type="text" name="codVideo" placeholder="Cod Video">
            <input type="submit" value="Agregar">
        </form>
        <p class="respuesta_form"></p>
        </div>
    </div> <!-- #contenido -->
    <div id="carrusel_videos">
        carrusel de videos
    </div>
<?php include('footer.php');?>

