// javascript.js

window.onload = function() {
  const canvas = document.querySelector('canvas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    // Draw a blue rectangle
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 150, 100);
  } else {
    alert('Canvas not supported in your browser.');
  }
};
