document.getElementById('contact-form').addEventListener('submit', function(e) {

e.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

const subject = encodeURIComponent(`Peachy Echo Inquiry from ${name}`);

const body = encodeURIComponent(`Sender Email: ${email}\n\nMessage:\n${message}`);

window.location.href = `mailto:Leo@peachyecho.com?subject=${subject}&body=${body}`;

alert("Opening your mail app to send your message.");

});
