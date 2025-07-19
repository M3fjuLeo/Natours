/* eslint-disable */

// const locations = JSON.parse(document.getElementById('map').dataset.locations);
// console.log(locations);

document.addEventListener('DOMContentLoaded', function () {
  const mapElement = document.getElementById('map');
  if (mapElement && mapElement.dataset.locations) {
    const locations = JSON.parse(mapElement.dataset.locations);
    console.log(locations);
    // reszta kodu mapbox tutaj
  } else {
    console.error('Element map nie został znaleziony');
  }
});
