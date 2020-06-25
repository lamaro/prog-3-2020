$(document).ready(function(){
    console.log("Ya estamos listos");
    
    $(".celda").click(function(){
        //para la celda que se clickeo obteneme la data y guardala en posX (variable)
       posX = $(this).data("posx");
       posY = $(this).data("posy");
        
        $.getJSON("http://localhost:8080/moodPlayerBlank/data.php?posx=" + posX + "&posy=" + posY,function(result){
            $("#carrusel_videos").empty();
            $.each(result, function(i, registroVideo){
                $("#carrusel_videos").append(
                    '<div class="video_container" data-codvideo="' + registroVideo.codVideo + '"><h3>' + registroVideo.artista + '</h3><h4>' + registroVideo.codVideo + '</h4></div>'
                );
            });
        });
    });

    
});