

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const firstName = form.querySelector('input[type="text"]').value;
        const lastName = form.querySelectorAll('input[type="text"]')[1].value;
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;

        if (firstName && lastName && email && password) {
            
            alert('Signup successful!');
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
