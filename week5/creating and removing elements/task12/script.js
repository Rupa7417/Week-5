function cloneAndAppend() {
    
    const originalDiv = document.getElementById('originalDiv');
    
    
    const clonedDiv = originalDiv.cloneNode(true);
    
   
    const targetDiv = document.getElementById('targetDiv');
    
   
    targetDiv.appendChild(clonedDiv);
}
