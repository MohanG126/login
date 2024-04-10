const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const mobileNumber = document.getElementById('mobileNumber').value;

    fetch('/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mobileNumber })
    })
   .then(response => response.json())
   .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            window.location.href = '/otp.html';
        }
    })
   .catch(error => console.error(error));
});