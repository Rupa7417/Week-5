  
const firstSibling = document.querySelector('.parent .sibling');


let colorIndex = 0;
const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow'];


let currentElement = firstSibling;
while (currentElement) {
   
    currentElement.style.backgroundColor = colors[colorIndex];
    currentElement.style.fontWeight = 'bold';
    currentElement.style.padding = '15px';

  
    currentElement = currentElement.nextElementSibling;
    
    
    colorIndex = (colorIndex + 1) % colors.length;
}
