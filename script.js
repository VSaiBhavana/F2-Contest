function validateEmail() {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');

    if (emailInput.value.length > 3 && emailInput.value.includes('@') && emailInput.value.includes('.')) {
        emailError.innerHTML = '<span class="success">All good to go!</span>';
    } else {
        emailError.innerHTML = '<span class="error"> Make sure email is more than 3 characters and has @ and a . </span>';
    }
}

function validatePassword() {
    var passwordInput = document.getElementById('password');
    var passwordError = document.getElementById('passwordError');

    if (passwordInput.value.length > 8) {
        passwordError.innerHTML = '<span class="success">All good to go!</span>';
    } else {
        passwordError.innerHTML = '<span class="error"> Make sure password is more than 8 characters</span>';
    }
}

function submitForm() {
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');

    if (emailError.innerText === 'All good to go!' && passwordError.innerText === 'All good to go!') {
        var confirmation = confirm('Are you sure you want to submit the form?');

        if (confirmation) {
            alert('Successful signup!');
        } else {
            document.getElementById('signupForm').reset();
        }
    } else {
        alert('Please fix the errors before submitting.');
    }
}