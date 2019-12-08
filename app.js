console.log('Form Validation with REGEX');

// Create Event Listeners For Each of the inputs

/**************************************
    NAME
**************************************/
document.getElementById('name').addEventListener('blur', isValidName);

// Functions
function isValidName() {
    const name = document.getElementById('name').value;
    const regex = /^[a-zA-Z\s]{2,10}$/;

    if (!regex.test(name)) {
        showError('name');
    } else {
        hideError('name');
        return true;
    }

    // console.log('Validate Name', name);
}

/**************************************
    ZIPCODE
**************************************/
document.getElementById('zipcode').addEventListener('blur', isValidZipcode);

// Functions
function isValidZipcode() {

    const zipcode = document.getElementById('zipcode').value;
    const regex = /^[0-9]{5}(-[0-9]{4})?$/;

    if (!regex.test(zipcode)) {
        showError('zipcode');
    } else {
        hideError('zipcode');
        return true;
    }
    console.log('Validate Zipcode');
}

/**************************************
    EMAIL
**************************************/
document.getElementById('email').addEventListener('blur', isValidEmail);

// Functions
function isValidEmail() {

    const email = document.getElementById('email').value;
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!regex.test(email)) {
        showError('email');
    } else {
        hideError('email');
        return true;
    }
    console.log('Validate Email');
}

/**************************************
    PHONE
**************************************/
document.getElementById('phone').addEventListener('blur', isValidPhone);

// Functions
function isValidPhone() {

    const phone = document.getElementById('phone').value;
    const regex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if (!regex.test(phone)) {
        showError('phone');
    } else {
        hideError('phone');
        return true;
    }
    console.log('Validate Email');
    console.log('Validate Phone');
}

/**************************************
    SUBMIT FORM
**************************************/
document.getElementById('form-submit').addEventListener('click', (e) => {
    e.preventDefault();
    if ( isValidName() && isValidZipcode() && isValidEmail() && isValidPhone() ) {
        clearAllInputs();
        formSubmitSuccess();
    }   else {
        console.error('Form is invalid');
    }
    
});


/**************************************
    HELPER FUNCTIONS
**************************************/

function showError(id) {
    document.getElementById(id).classList.add('is-invalid');
    console.log('Show Error');
}

function hideError(id) {
    document.getElementById(id).classList.remove('is-invalid');
    console.log('HideError');
}

function clearAllInputs() {
    document.getElementById('name').value = '';
    document.getElementById('zipcode').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}

function formSubmitSuccess() {
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = `
        <div class="mt-5 alert alert-primary" role="alert">
            Form Submit Success.
        </div>
    `;
}

