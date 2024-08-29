
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Validate name
        if (name.length < 5) {
            document.getElementById('name').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('name').classList.remove('is-invalid');
        }
        
        // Validate email
        if (!email.includes('@')) {
            document.getElementById('email').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('email').classList.remove('is-invalid');
        }
        
        // Validate phone number
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone) || phone === '1234567890') {
            document.getElementById('phone').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('phone').classList.remove('is-invalid');
        }
        
        // Validate password
        if (password.length < 8 || password === 'password' || password === name) {
            document.getElementById('password').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('password').classList.remove('is-invalid');
        }
        
        // Validate confirm password
        if (password !== confirmPassword) {
            document.getElementById('confirmPassword').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('confirmPassword').classList.remove('is-invalid');
        }
        
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset(); // Reset form fields if needed
        }
    });
});