document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signinForm');
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    const logoutButton = document.getElementById('logoutButton');
    const userEmailElement = document.getElementById('userEmail');
    const user = {
        email: '927621bee077@mkce.ac.in',
        password: 'password123'
    };

    if (signinForm) {
        signinForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (email === user.email && password === user.password) {
                localStorage.setItem('authenticated', 'true');
                localStorage.setItem('userEmail', email);
                window.location.href = 'dashboard.html';
            } else {
                errorMessage.textContent = 'Invalid email or password.';
                errorMessage.style.display = 'block';
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (email === user.email && password === user.password) {
                localStorage.setItem('authenticated', 'true');
                localStorage.setItem('userEmail', email);
                window.location.href = 'dashboard.html';
            } else {
                errorMessage.textContent = 'Invalid email or password.';
                errorMessage.style.display = 'block';
            }
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('authenticated');
            localStorage.removeItem('userEmail');
        });
    }

    if (userEmailElement) {
        const authenticated = localStorage.getItem('authenticated');
        const userEmail = localStorage.getItem('userEmail');
        if (authenticated === 'true') {
            userEmailElement.textContent = userEmail;
        } else {
            window.location.href = 'index.html';
        }
    }
});
