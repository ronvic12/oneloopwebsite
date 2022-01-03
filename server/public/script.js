let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let captcha = document.getElementById('g-recaptcha-response');
    // console.log(captcha.value);

    fetch('/captcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: captcha.value })
    }).then(response => response.json()).then(console.log());
});