function getFormvalue() {
    // Get the form element by its id
    const form = document.getElementById('form1');
    
    // Get the values of the first and last name fields using their names
    const firstName = form.elements['fname'].value;
    const lastName = form.elements['lname'].value;

    
    alert(firstName + " " + lastName);
}