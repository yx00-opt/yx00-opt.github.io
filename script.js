// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Show only the target section and hide others, then smooth scroll
function showSection(id) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const targetSection = document.getElementById(id);
  if (targetSection) {
    targetSection.style.display = 'block';
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Nav link click event
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navLinks.classList.remove('show'); // Close menu on mobile after click

    const targetId = link.getAttribute('href').slice(1);
    showSection(targetId);
  });
});

// Typing animation for whoami text
const typingText = document.getElementById('typing-text');
const text = 'Hi! I am Yeaseen';
const typingSpeed = 70;
let index = 0;

function typeWriter() {
  if (!typingText) return;
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, typingSpeed);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  showSection('whoami');
  typeWriter();

  if (window.location.hash) {
    const hash = window.location.hash.slice(1);
    showSection(hash);
  }
});
