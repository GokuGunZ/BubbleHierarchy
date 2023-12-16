const circles = document.querySelectorAll('.circle');
const body = document.body;
const half = Math.ceil(circles.length / 2);
let clicked = false;


document.addEventListener('click', function(event) {
  circles.forEach(circle => {
    if (!circle.contains(event.target)) {
      circle.classList.remove('active');
      circle.classList.remove('active');
      resetOtherCircles();
      deactiveBox(circle);
      removeContentBox(circle);
      body.style.backgroundColor = '#242424';
    }
    clicked = false;
  });
});


circles.forEach((circle, index) => {
  if (index < half) {
    circle.classList.add('left');
  } else {
    circle.classList.add('right');
  }
});

circles.forEach(circle => {
  circle.addEventListener('mouseover', () => {
    if (!clicked){
      circle.classList.add('active');
      activeBox(circle);
      adjustOtherCircles(circle);
      changeBackgroundColor(circle);
    }
  });

  circle.addEventListener('mouseout', () => {
    if (!clicked) {
      circle.classList.remove('active');
      resetOtherCircles();
      deactiveBox(circle);
      removeContentBox(circle);
      body.style.backgroundColor = '#242424';
    }
  });

  circle.addEventListener('click', function(event) {
    if(!clicked){
      event.stopPropagation();
      addContentBox(circle);
      clicked = true;
    }
  })
});

function adjustOtherCircles(activeCircle) {
  circles.forEach(circle => {
    if (circle !== activeCircle) {
      circle.classList.add('inactive');
      const box = circle.querySelector('.box')
      box.classList.add('inactive');
    }
  });
}

function resetOtherCircles() {
  circles.forEach(circle => {
    circle.classList.remove('inactive');
    const box = circle.querySelector('.box')
    box.classList.remove('inactive');
  });
}


function changeBackgroundColor(activeCircle) {
  const backgroundColor = getComputedStyle(activeCircle).getPropertyValue('--background-color');
  body.style.backgroundColor = backgroundColor;
}

function activeBox(activeCircle){
  const box = activeCircle.querySelector('.box')
  box.classList.add('active');
}

function deactiveBox(activeCircle){
  const box = activeCircle.querySelector('.box')
  box.classList.remove('active');
}

function addContentBox(clickedCircle){
  const box = clickedCircle.querySelector('.box-content')
  box.classList.add('active');
}

function removeContentBox(clickedCircle){
  const box = clickedCircle.querySelector('.box-content')
  box.classList.remove('active');
}