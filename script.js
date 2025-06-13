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


// audio in the social links
const audio = document.getElementById('hacker-audio');
const audioIcon = document.getElementById('audio-icon');
const audioToggle = document.querySelector('.audio-toggle');

if (audioToggle && audio && audioIcon) {
  audioToggle.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().then(() => {
        audioIcon.src = "https://cdn4.vectorstock.com/i/1000x1000/76/28/red-pause-button-icon-vector-42577628.jpg"; // sound on
      }).catch((e) => {
        console.error('Play failed:', e);
      });
    } else {
      audio.pause();
      audioIcon.src = "https://thumbs.dreamstime.com/b/volume-speaker-icon-glassy-green-round-button-illustration-isolated-161326995.jpg"; // sound off
    }
  });
}
