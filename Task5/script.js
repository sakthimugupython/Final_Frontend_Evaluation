document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Get all input elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Get all error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Clear previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    // Name validation
    if (!name.value.trim()) {
        nameError.textContent = 'Name is required';
        valid = false;
    }

    // Email validation
    if (!email.value.trim()) {
        emailError.textContent = 'Email is required';
        valid = false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.textContent = 'Please enter a valid email address';
            valid = false;
        }
    }

    // Password validation
    if (!password.value) {
        passwordError.textContent = 'Password is required';
        valid = false;
    }

    // Confirm Password validation
    if (!confirmPassword.value) {
        confirmPasswordError.textContent = 'Please confirm your password';
        valid = false;
    } else if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Passwords do not match';
        valid = false;
    }

    // If all validations pass, you can submit the form
    if (valid) {
        this.submit();
    }
});
