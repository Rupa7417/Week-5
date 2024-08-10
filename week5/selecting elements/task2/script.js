function toggleClass() {
    const elements = document.querySelectorAll('.myClass');

    elements.forEach(element => {
        element.classList.toggle('highlight');
    });
}
