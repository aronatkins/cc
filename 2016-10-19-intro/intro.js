function rotate(x, deg) {
  x.css({
    MozTransform: 'rotate(-' + deg + 'deg)',
    WebkitTransform: 'rotate(' + deg + 'deg)',
    transform: 'rotate(' + deg + 'deg)'
  });
}

function rotateresize(x,deg,p) {
  x.css({
    MozTransform: 'rotate(-' + deg + 'deg) scale(' + p + ')',
    WebkitTransform: 'rotate(' + deg + 'deg) scale(' + p + ')',
    transform: 'rotate(' + deg + 'deg) scale(' + p + ')'
  });
}

function spinit($this) {
  var counter = 0;
  function spinOneDegree() {
    if (counter != 360) {
      counter += 2;
      var p = 1.0 + (counter < 180 ? counter : 360 - counter) / 90.0;
      rotateresize($this, counter*3, p);
      setTimeout(spinOneDegree, 10);
    }
  }
  spinOneDegree();
}

function spinhanna() {
  spinit($('#hanna'));
}
$('.click-hanna').click(spinhanna);

function brokeit($this) {
  var counter = 0;
  function spinOneDegree() {
    if (counter != 360) {
      counter += 4;
      var d = Math.random() > 0.5 ? counter*7 : counter * -3 % 360 ;
      var p = 1.0 + Math.random();
      rotateresize($this, d, p);
      setTimeout(spinOneDegree, 100);
    } else {
      rotateresize($this, 180, 1.0);
    }
  }
  spinOneDegree();
}
function broken() {
  brokeit($('#broken'));
}
$('.click-broken').click(broken);

var seen = '#ffffff';
var hidden = '#333333';
var introducerpos = 0;
function introducer() {
  var parent = $('.introductions');
  var intro = parent.find('.intro');
  var outro = parent.find('.outro');
  introducerpos += 180;
  rotate(parent, introducerpos);
  if (introducerpos % 360 == 0) {
    intro.find('h1, h2, h3').css({color: seen});
    outro.find('h1, h2, h3').css({color: hidden});
  } else {
    intro.find('h1, h2, h3').css({color: hidden});
    outro.find('h1, h2, h3').css({color: seen});
  }
}

$('.introductions').click(introducer);
rotate($('.introductions .outro'), 180);
$('.introductions .outro').find('h1, h2, h3').css({color: hidden});

