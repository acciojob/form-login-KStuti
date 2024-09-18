function getFormvalue() {
    const form =document.getElementById("form1");

	
    const firstName = form.elemnts('fname').value;
    const lastName = form.elemnts('lname').value;
    alert(firstName + ' ' + lastName);
}