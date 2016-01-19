function rotate(x, deg) {
  x.css({
    MozTransform: 'rotate(-' + deg + 'deg)',
    WebkitTransform: 'rotate(' + deg + 'deg)',
    transform: 'rotate(' + deg + 'deg)'
  });
}

function spinit($this) {
  var counter = 0;
  function spinOneDegree() {
    if (counter != 360) {
      counter += 1;
      rotate($this, counter);
      setTimeout(spinOneDegree, 10);
    }
  }
  spinOneDegree();
}

function spinhanna() {
  spinit($('#hanna'));
}

$('.click-hanna').click(spinhanna);

var introducerpos = 0;
function introducer() {
  var parent = $('.introductions');
  var intro = parent.find('.intro');
  var outro = parent.find('.outro');
  introducerpos += 180;
  rotate(parent, introducerpos);
  if (introducerpos % 360 == 0) {
    intro.find('h1, h2, h3').css({color: '#000000'});
    outro.find('h1, h2, h3').css({color: '#cdcdcd'});
  } else {
    intro.find('h1, h2, h3').css({color: '#cdcdcd'});
    outro.find('h1, h2, h3').css({color: '#000000'});
  }
}

$('.introductions').click(introducer);
rotate($('.introductions .outro'), 180);
$('.introductions .outro').find('h1, h2, h3').css({color: '#cdcdcd'});

