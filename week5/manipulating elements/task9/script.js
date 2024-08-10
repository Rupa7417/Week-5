function toggleBackgroundColor() {
    const box = document.getElementById('colorBox');
  
    if (box.style.backgroundColor === 'lightblue') {
        box.style.backgroundColor = 'lightcoral';
    } else {
        box.style.backgroundColor = 'lightblue';
    }
}
