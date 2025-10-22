document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.querySelector('.timeline-horizontal');
  let isDown = false;
  let startX;
  let scrollLeft;

  if (timeline) {
    timeline.addEventListener('mousedown', (e) => {
      isDown = true;
      timeline.classList.add('active');
      startX = e.pageX - timeline.offsetLeft;
      scrollLeft = timeline.scrollLeft;
      e.preventDefault();
    });

    timeline.addEventListener('mouseleave', () => {
      isDown = false;
      timeline.classList.remove('active');
    });

    timeline.addEventListener('mouseup', () => {
      isDown = false;
      timeline.classList.remove('active');
    });

    timeline.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - timeline.offsetLeft;
      const walk = (x - startX) * 2; // multiplica para aumentar a velocidade
      timeline.scrollLeft = scrollLeft - walk;
    });

    // Mantém o scroll com a roda do mouse
    timeline.addEventListener('wheel', function (e) {
      if (e.deltaY !== 0) {
        e.preventDefault();
        timeline.scrollLeft += e.deltaY * 3;
      }
    });
  }
});

let count = 1;
document.getElementById('radio1').checked = true;

setInterval( function(){
  nextImage();
}, 2000)


function nextImage(){
  count++;
  if(count>4){
    count = 1;
  }

  document.getElementById('radio'+count).checked = true;

};
