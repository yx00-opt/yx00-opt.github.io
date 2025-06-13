// script.js

document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", function (e) {
  // Disable F12, Ctrl+Shift+I/J/U, Ctrl+U
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J"].includes(e.key)) ||
    (e.ctrlKey && ["U"].includes(e.key))
  ) {
    e.preventDefault();
  }
});
