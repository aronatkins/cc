function lottery() {
  $('#lottery').submit(function(event) {
    event.preventDefault();

    var error = $('#error');
    error.html('');             // clear previous mistakes

    var inel = $("textarea[name='in']");
    var outel = $("textarea[name='out']");
    var k = $("input[name='k']").val();

    var raw = inel.val().trim();
    if (raw === "") {
      error.html("Cannot choose from an empty set.");
      return;
    }
    var ins = raw.split(/\r?\n/);

    var n = ins.length;
    if (n < k) {
      error.html("Cannot choose "+k+" from "+n+".");
      return;
    }

    // m choose n; no duplicates.
    var outs=[]
    for (var i=0; i<k; ++i) {
      var choice = Math.floor(Math.random()*ins.length);
      outs.push(ins[choice]);
      ins.splice(choice, 1);
    }
    outel.val(outs.join('\n'));
  });
}

$(lottery);
