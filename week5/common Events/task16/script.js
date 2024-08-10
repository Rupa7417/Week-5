
function logWindowDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(`Window dimensions: ${width}x${height}`);
}


window.addEventListener('resize', logWindowDimensions);


logWindowDimensions();
