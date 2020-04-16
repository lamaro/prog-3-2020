let markersAll = []; //array con todos los markers

//Inicializo el mapa (callback en script google api en index.html)
window.initMap = () => {
    const maimo = { lat: -34.610490, lng: -58.440860 }; //esto es maimo!
    const map = new google.maps.Map(
        document.getElementById('map'),
        {
            zoom: 15, //Zoom
            center: maimo, //Centrado de mapa
            styles: styles, //Estilos de mapa, los agrego en index.html mapaStyles.js
            streetViewControl: false, //Desactivo el street view (chaboncito)
            fullscreenControl: false, //Desactivo el boton de fullscreeen
            mapTypeControlOptions: { //Desactivo los tipos de terreno del mapa (satellite y terrain)
                mapTypeIds: []
            },
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER //ubico los controles de zoom
            }
        });
    fetchMarkers(map) //Llamammos a la función que trae el json de markers

    //FILTROS
    //Traigo elementos del DOM
    const handleFilterBeer = document.querySelector('.beer');
    const handleFilterBar = document.querySelector('.bar');
    const handleFilterFood = document.querySelector('.food');

    //Eventos de click de los filtros
    handleFilterBeer.addEventListener('click', (e) => {
        e.preventDefault();
        addMarkerFiltered('Birreria')
    })
    handleFilterFood.addEventListener('click', (e) => {
        e.preventDefault();
        addMarkerFiltered('Restaurant')
    })
    handleFilterBar.addEventListener('click', (e) => {
        e.preventDefault();
        addMarkerFiltered('Barcito Cheto')
    })

    //Agrego los markers filtrados según filtro (markerType)
    const addMarkerFiltered = (markerType) => {
        console.log('clicked beer');
        markersAll.forEach((marker) => {
            //console.log(marker)
            marker.setMap(null); //Quita todos los markers del mapa
        })
        const markerFiltered = markersAll.filter((markerItem) => markerItem.customInfo === markerType)
        markerFiltered.forEach((marker) => {
            marker.setMap(map);
        })
    }
}
//Función de asincrónica que trae los markers
const fetchMarkers = async (map) => { 
    try {
        const response = await fetch('assets/data/markers.json');
        const json = await response.json();
        json.forEach(marker => {
            addMarker(map, marker);
        });
        //console.log(markersAll)
    } catch (error) {
        console.log(error);
    }
}

//Función de agregado de un marker
const addMarker = (map, marker) => { 
    //Destructuring de la info del marker
    const { lat, lng, name, description, type } = marker;

    //Armo la infowindow
    const contentString = `
    <div>
    <h2>${name}</h2>
    <h3>${type}</h3>
    <p>${description}</p>
    </div>`;
    const infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    //Iconos
    const icons = {
        'Birreria': '/assets/images/beer.png',
        'Restaurant': '/assets/images/food.png',
        'Barcito Cheto': '/assets/images/bar.png',

    }
    //Agrego el marker
    const markerItem = new google.maps.Marker(
        {
            position: { lat: lat, lng: lng },
            icon: icons[type],
            map: map,
            customInfo: type
        }
    );
    markerItem.setMap(map);
    //Agrego evento de click en el marker, abre infowindow
    markerItem.addListener('click', function () {
        infowindow.open(map, markerItem);
    });
    //Agrego mi nuevo marker (objeto marker, no json marker, a mi array para filtros)
    markersAll.push(markerItem);
}

//That's all folks!