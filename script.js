// Matrix background
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let chars = "01".split('');
let fontSize = 14;
let columns = canvas.width / fontSize;
let drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    let text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

// Routing
function showPageFromHash() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const hash = location.hash.slice(1) || 'whoami';
  const section = document.getElementById(hash);
  if (section) section.classList.add('active');
}
window.addEventListener('hashchange', showPageFromHash);
window.addEventListener('load', showPageFromHash);

// Disable right click
document.addEventListener('contextmenu', e => e.preventDefault());

// Block DevTools (limited)
document.onkeydown = function(e) {
  if (
    e.key === "F12" || 
    (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key)) || 
    (e.ctrlKey && e.key === "U")
  ) return false;
};
