function randomPosition(element) {
    const x = Math.random() * (window.innerWidth - element.clientWidth);
    const y = Math.random() * (window.innerHeight - element.clientHeight);
    return { x, y };
  }
  
  function animateElement(element, startX, startY, endX, endY, duration, startTime) {
    const now = performance.now();
    const timeElapsed = now - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
  
    const x = startX + (endX - startX) * progress;
    const y = startY + (endY - startY) * progress;
    element.style.transform = `translate(${x}px, ${y}px)`;
  
    if (progress < 1) {
      requestAnimationFrame(() => animateElement(element, startX, startY, endX, endY, duration, startTime));
    } else {
      const newStartX = endX;
      const newStartY = endY;
      const { x: newEndX, y: newEndY } = randomPosition(element);
      const newDuration = Math.random() * 5000 + 3000;
      animateElement(element, newStartX, newStartY, newEndX, newEndY, newDuration, performance.now());
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate span");
  
    elements.forEach((element) => {
      const { x: startX, y: startY } = randomPosition(element);
      const { x: endX, y: endY } = randomPosition(element);
      const duration = Math.random() * 5000 + 3000;
  
      animateElement(element, startX, startY, endX, endY, duration, performance.now());
    });
  });
  