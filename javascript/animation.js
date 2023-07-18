function animate(options) {

  var start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    var progress = options.timing(timeFraction)
    
    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

function bounce(timeFraction) {
      for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
      }
    }

function animateText() {
  let paragraph = document.getElementById("objective");
  let text = paragraph.innerHTML;
  let to = text.length,
	from = 0;

  animate({
	duration: 30000,
	timing: bounce,
	draw: function(progress) {
	  let result = (to - from) * progress + from;
	  paragraph.innerHTML = text.slice(0, Math.ceil(result))
	}
  });
}


animateText();
