let form = document.forms.formname;
let firstname = form.elements.firstname;
let lastname = form.elements.lastname;

function getFormValue() {
    console.log(firstname.value);
    console.log(lastname.value);
}

