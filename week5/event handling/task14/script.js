
const form = document.getElementById('myForm');


form.addEventListener('submit', function(event) {
    
    event.preventDefault();

   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    
    if (!name || !email) {
        alert('Please fill in all fields.');
        return;
    }

    
    alert('Form submitted successfully!');
   
});
