document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Collecting input values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Validation checks
    if (!firstName || !lastName || !email || !phone || !password) {
        alert("All fields are required!");
        return;
    }
  
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
  
    if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }
  
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }
  
    
    const formData = {
        first_name: "John",
        last_name: "Doe",
        phone_number: 9988776655,
        email: "johndoe123@email.com",
        password: "john1234"
    };
    
    console.log(formData);
    alert("Form submitted successfully!");
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Phone validation function
function validatePhone(phone) {
    const re = /^\d{10}$/; 
    return re.test(phone);
}