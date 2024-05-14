document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform basic validation (you may want to enhance this)
    if (username === 'admin' && password === 'password') {
        window.location.href = 'index.html'; // Redirect to main page
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
