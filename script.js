const formToggle = document.querySelector('.form-toggle input');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

formToggle.addEventListener('click', () => {
  loginForm.classList.toggle('active');
  signupForm.classList.toggle('active');
});

// Optional: Smooth transition between forms using CSS transitions
loginForm.addEventListener('animationend', () => {
  if (!loginForm.classList.contains('active')) {
    loginForm.style.display = 'none';
  }
});

signupForm.addEventListener('animationend', () => {
  if (!signupForm.classList.contains('active')) {
    signupForm.style.display = 'none';
  }
});