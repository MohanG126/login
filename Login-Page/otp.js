const otpForm = document.getElementById('otpForm');
const errorDiv = document.getElementById('error');

otpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const otp = document.getElementById('otp').value;

    fetch('/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ otp })
    })
   .then(response => response.json())
   .then(data => {
        if (data.error) {
            errorDiv.textContent = data.error;
        } else {
            window.location.href = '/home';
        }
    })
   .catch(error => console.error(error));
});