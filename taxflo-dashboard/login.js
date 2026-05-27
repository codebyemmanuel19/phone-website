function togglePassword() {
  const input = document.getElementById('passwordInput');
  input.type = input.type === 'password' ? 'text' : 'password';
}

document.querySelector('.btn-signin').addEventListener('click', function() {
    window.location.href = 'home.html';
});