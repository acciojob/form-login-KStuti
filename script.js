function getFormvalue() {
    // Get the form element by its ID
    const form = document.getElementById('nameForm');

    // Retrieve the value of the first and last name inputs
    const firstName = form.elements['firstName'].value;
    const lastName = form.elements['lastName'].value;

    // Concatenate the names and show in an alert
    alert(firstName + " " + lastName);
}

// Adding an event listener to the form submission to trigger the function
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting
    getFormvalue();  // Call the function to get and display the values
});
