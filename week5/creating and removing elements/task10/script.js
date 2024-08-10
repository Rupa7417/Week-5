function addListItem() {
   
    const newItem = document.createElement('li');
    
   
    newItem.textContent = 'New List Item';
    
  
    const list = document.getElementById('myList');
    
   
    list.appendChild(newItem);
}
