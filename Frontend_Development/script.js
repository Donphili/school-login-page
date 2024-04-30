document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // You can handle authentication here (e.g., sending a request to the backend)
    // For now, just display a message
    document.getElementById("message").textContent = "Login successful!";
});
