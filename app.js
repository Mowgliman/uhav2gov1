var APIKey = '716b35ad2eaf4d898f0477885e00e903';

var map = new L.Map('map', {
 crs: L.CRS.EPSG3857,
  zoomControl: false
}).setView([-21.234342313973883,-159.77949142456055], 12);
	//@todo load some data
var geojsonLayer = L.geoJSON(cookpoint,{onEachFeature: function (feature, layer) {layer.bindPopup(feature.properties.name);}}).addTo(map);
        //map.fitBounds(geojsonLayer.getBounds());
	
	
	var basemaps = [
    L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
			attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
			subdomains: 'abcd',
			maxZoom: 20,
			minZoom: 0,
			label: 'Water Color'
		}),
		L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abc',
        maxZoom: 20,
        minZoom: 0,
        label: 'Open Street Map'  // optional label used for tooltip
    }),
		
    L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles by &copy; <a href="http://www.esri.com/">Esri</a>, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        subdomains: 'abcd',
        maxZoom: 20,
        minZoom: 0,
        label: 'World Imagery'
    }),
	
    L.tileLayer('http://tiles-a.data-cdn.linz.govt.nz/services;key=' + APIKey + '/tiles/v4/layer=1511/EPSG:3857/{z}/{x}/{y}.png', {
        attribution: 'Map tiles <a href=“http://data.linz.govt.nz”>Sourced from LINZ. CC-BY 3.0</a>',
        subdomains: 'abcd',
        maxZoom: 16,
        minZoom: 1,
        label: 'Raro Topo'
    })
];

map.addControl(L.control.basemaps({
    basemaps: basemaps,
    tileX: 0,  // tile X coordinate
    tileY: 0,  // tile Y coordinate
    tileZ: 1   // tile zoom level
}));
	




		
//Style button with toggle code

/*var button = new L.Control.Button('Toggle me', {
toggleButton: 'active'
});
button.addTo(map);
button.on('click', function () {
    if (button.isToggled()) {
        alert("button is toggled");
		
    } else {
        alert("button is not toggled");
		map.zoomControl.remove();
    }
});
		*/
		
	//navbarcode
		/*
	L.control.navbar({position: 'topright'}).addTo(map);
	*/