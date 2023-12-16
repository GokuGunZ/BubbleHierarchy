function onMouseMove(event) {
    const target = event.target;
    const body = document.body;
  
    if (target.classList.contains("circle")) {
      // Rimpicciolisci gli altri cerchi
      for (const circle of document.querySelectorAll(".circle")) {
        if (circle !== target) {
          circle.style.width = 100;
          circle.style.height = 100;
        }
      }
  
      // Ingrandisci il cerchio corrente
      target.style.width = 200;
      target.style.height = 200;
  
      // Cambia il colore dello sfondo
      body.style.backgroundColor = target.style.borderColor;
    }
  }
  
  document.addEventListener("mousemove", onMouseMove);

  function onCircleClick(event) {
    const target = event.target;
  
    if (target.classList.contains("circle")) {
      // Cambia il colore dello sfondo
      target.style.backgroundColor = target.style.borderColor;
    }
  }
  
  document.querySelectorAll(".circle").forEach((circle) => {
    circle.addEventListener("click", onCircleClick);
  });
  