document.addEventListener('DOMContentLoaded', function() {
  // Add any interactive functionality here
  console.log('Portal is ready!');
  
  // Example: Add click animation to cards
  const cards = document.querySelectorAll('.portal-card');
  
  cards.forEach(card => {
    card.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
    });
  });
});
