document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '0';
  canvas.style.opacity = '0.15';
  document.querySelector('.particles').appendChild(canvas);

  // Configuración de partículas
  const particles = [];
  const particleCount = 100;
  
  // Tamaño del canvas
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  // Inicializar partículas
  function initParticles() {
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25
      });
    }
  }
  
  // Animación de partículas
  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Movimiento
      p.x += p.speedX;
      p.y += p.speedY;
      
      // Rebotar en los bordes
      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    }
    
    requestAnimationFrame(animateParticles);
  }
  
  // Iniciar
  resizeCanvas();
  initParticles();
  animateParticles();
  
  // Redimensionar al cambiar tamaño de ventana
  window.addEventListener('resize', resizeCanvas);
});
