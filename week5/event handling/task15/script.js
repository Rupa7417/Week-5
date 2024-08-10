
const trackingDiv = document.getElementById('trackingDiv');


const coordinatesDisplay = document.getElementById('coordinates');


trackingDiv.addEventListener('mousemove', function(event) {
    
    const rect = trackingDiv.getBoundingClientRect();
    
   
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

  
    coordinatesDisplay.textContent = `Coordinates: (x: ${x}, y: ${y})`;
});
