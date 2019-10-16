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

var all_students = [
    "Elena",
    "Disha",
    "Benjamin",
    "Josephine",
    "David",
    "Rina",
    "Oscar",
    "Aiden",
    "Theo",
    "Leila",
    "Runa",
    "Siena",
    "Fionn",
    "Isaac",
    "Maggie",
    "Libby",
    "Jimmy",
    "Joseph",
    "Christopher",
    "Yuri",
    "Alyssa",
    "Charles",
    "Riku",
    "Darragh",
    "Linda",
    "Jack",
    "Sylvia",
    "Abby",
    "Aniketh",
    "Galen",
    "Aarush",
    "Jiajia",
    "Oneth",
    "Marco",
    "Michael",
    "Samhith",
    "Lily",
];

function rint(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var all_colors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
    "#00d700",
    "#FF7F00",
    "#9400D3",
];

function names(students, colors) {
    if (!colors.length) {
        colors = all_colors.slice();
    }
    var c = rint(colors.length);
    var color = colors[c];
    colors.splice(c,1);

    var target = $('#name');
    var remaining = students.length;
    if (remaining) {
        var i = rint(remaining);
        var student = students[i];
        students.splice(i, 1);

        target.html(student);
        target.css('color', color);
        setTimeout(names, 400, students, colors);
    } else {
        target.html("YOU.");
        target.css('color', color);
    }
}

function roll_names() {
    var target = $('#name');
    // target.css('font-size', '200px');
    names(
        all_students.slice(),
        all_colors.slice(),
    );
}

$('.names').click(roll_names);

var seen = '#ffffff';
var hidden = '#444444';
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

