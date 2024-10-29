async function createMap() {
    var map = L.map('map').setView([37, -95], 4);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    function getRandomInRange(from, to, fixed) {
        return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    }

    async function fetchLocality(latitude, longitude) {
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
        const data = await response.json();
        return data.locality || "Locality not found";
    }

  
    var Latitude_Coordinates1 = getRandomInRange(30, 35, 3);
    var Longitude_Coordinates1 = getRandomInRange(-90, -100, 3);
    L.marker([Latitude_Coordinates1, Longitude_Coordinates1]).addTo(map);
    document.getElementById('marker1').textContent = `Marker 1: Latitude: ${Latitude_Coordinates1}, Longitude: ${Longitude_Coordinates1}`;
    document.getElementById('marker1Loc').textContent = `Locality: ${await fetchLocality(Latitude_Coordinates1, Longitude_Coordinates1)}`;

   
    var Latitude_Coordinates2 = getRandomInRange(30, 35, 3);
    var Longitude_Coordinates2 = getRandomInRange(-90, -100, 3);
    L.marker([Latitude_Coordinates2, Longitude_Coordinates2]).addTo(map);
    document.getElementById('marker2').textContent = `Marker 2: Latitude: ${Latitude_Coordinates2}, Longitude: ${Longitude_Coordinates2}`;
    document.getElementById('marker2Loc').textContent = `Locality: ${await fetchLocality(Latitude_Coordinates2, Longitude_Coordinates2)}`;

  
    var Latitude_Coordinates1 = getRandomInRange(30, 35, 3);
    var  Longitude_Coordinates1 = getRandomInRange(-90, -100, 3);
    L.marker( [Latitude_Coordinates1, Longitude_Coordinates1]).addTo(map);
    document.getElementById('marker3').textContent =  `Marker 3: Lattude: ${Latitude_Coordinates1}, Longitude: ${Longitude_Coordinates1}`;
    document.getElementById('marker3Loc').textContent =`Locality: ${await fetchLocality(Latitude_Coordinates1, Longitude_Coordinates1)}`;
}

window.onload = createMap;
