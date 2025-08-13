  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let drawing = false;
  let currentColor = '#00ccff';
  let hue = 0;
  let multicolor = false;

  function resizeCanvas() {}
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const colorPicker = document.getElementById('colorPicker');
  colorPicker.addEventListener('input', () => {
    currentColor = colorPicker.value;
  });

  function toggleMulticolor() {
    multicolor = !multicolor;
    colorPicker.disabled = multicolor;
  }

  function resetCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function startDraw(e) {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.touches[0].clientX, e.touches[0].clientY);
    if (navigator.vibrate) navigator.vibrate(10);
  }

  function endDraw() {
    drawing = false;
  }

  function draw(e) {
    if (!drawing) return;
    e.preventDefault();

    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;

    // Glow powder mode color shift
    if (multicolor) {
      hue += 2;
      if (hue > 360) hue = 0;
      currentColor = hsl($,{hue}, 100% 60%"");
    }

    // Draw glow trail
    ctx.lineWidth = 18;
    ctx.lineCap = 'round';
    ctx.strokeStyle = currentColor;
    ctx.shadowColor = currentColor;
    ctx.shadowBlur = 40;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = currentColor + '88'; // faded dot
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x, y);

    // Fade effect like powder
    ctx.globalAlpha = 0.98;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1.0;
  

  canvas.addEventListener('touchstart', startDraw);
  canvas.addEventListener('touchend', endDraw);
  canvas.addEventListener('touchmove', draw);}