function getFormData(event){
    event.preventDefault();

    var full_name = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    localStorage.setItem('Full-Name', full_name);
    localStorage.setItem('Email', email);
    localStorage.setItem('Subject', subject);
    localStorage.setItem('Message', message);
}

// script.js

document.getElementById('scrollup').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    // left: 0,
    // behavior: 'smooth'
  });
});

document.getElementById('scrolldown').addEventListener('click', function() {
  window.scrollTo({
    top: document.body.scrollHeight,
    // left: 0,
    // behavior: 'smooth'
  });
});
