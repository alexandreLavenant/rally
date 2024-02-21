const socket = io('http://localhost:3000', {
  withCredentials: true,
  extraHeaders: {
    'my-custom-header': 'abcd'
  }
});

const carIcon = L.icon({
  iconUrl: 'car.svg',
  iconSize:     [40, 40], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const map = L.map('map');
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.setView([50, 8], 13);

const addPosition = (position) => {
  const coords = [position.coords.latitude, position.coords.longitude];
  L.marker(coords, { icon: carIcon }).addTo(map);
  console.info(position);
  socket.emit('location', { name: 'Team 1', coords });
}

navigator.geolocation.getCurrentPosition((position) => {
  const coords = [position.coords.latitude, position.coords.longitude];
  map.setView(coords, 13);
  addPosition(position);
});
navigator.geolocation.watchPosition(addPosition);

socket.on('location', (position) => {
  console.log(position);
});

// const today = new Date();
// const tomorrow = (new Date()).setTime(today.getTime() + 24 * 60 * 60);

// const countdown = tomorrow.getTime() - today.getTime();
// console.log(countdown);