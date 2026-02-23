// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Sticky navbar
window.onscroll = function() {
  const navbar = document.getElementById('navbar');
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
document.addEventListener("DOMContentLoaded", function () {
  const text = "Welcome to Book Buddy";
  const typingText = document.getElementById("typing-text");
  let index = 0;

  function type() {
      if (index < text.length) {
          typingText.textContent += text.charAt(index);
          index++;
          setTimeout(type, 100); // Adjust speed
      } else {
          document.querySelector(".cursor").style.display = "none"; // Hide cursor after typing
      }
  }

  type(); // Start typing effect
});

