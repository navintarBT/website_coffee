const footer = document.querySelector('.footer');
const header = document.querySelector('.header');
fetch('/header.html')
.then(res=>res.text())
.then(data=>{
    header.innerHTML=data;
});
fetch('/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data;
});

$(document).ready(function() {
    $('#signup-form').submit(function(e) {
      e.preventDefault();
      var username = $('#username').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var user = {
        username: username,
        email: email,
        password: password
      };
      localStorage.setItem(username, JSON.stringify(user));
      window.location.href = 'index.html';

    });
  
    $('#login-form').submit(function(e) {
      e.preventDefault();
      var username = $('#login-username').val();
      var password = $('#login-password').val();
      var storedData = JSON.parse(localStorage.getItem(username));
      if (storedData && storedData.password === password) {
        alert('Login successful!');
        // Redirect to home page or do something else
        window.location.href = 'index.html';
      } else {
        alert('Invalid username or password');
      }
    });
  });
  