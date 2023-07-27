function showRegisterContainer() {
  const loginContainer = document.getElementById('login-container');
  const registerContainer = document.getElementById('register-container');

  loginContainer.style.display = 'none';
  registerContainer.style.display = 'block';
}

function redirectToLogin() {
  const loginContainer = document.getElementById('login-container');
  const registerContainer = document.getElementById('register-container');

  loginContainer.style.display = 'block';
  registerContainer.style.display = 'none';
}