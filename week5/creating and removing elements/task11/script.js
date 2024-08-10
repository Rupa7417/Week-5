function removeLastChild() {

    const divElement = document.getElementById('myDiv');
    
  
    if (divElement.lastElementChild) {
       
        divElement.removeChild(divElement.lastElementChild);
    }
}
