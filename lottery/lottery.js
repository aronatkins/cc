function lottery() {
  $('#lottery').submit(function(event) {
    event.preventDefault();

    var error = $('#error');

    var inel = $("textarea[name='in']");
    var outel = $("textarea[name='out']");
    var losersel = $("textarea[name='losers']");
    var k = $("input[name='k']").val();

    error.html('');             // clear previous mistakes
    outel.val('');              // clear previous output
    losersel.val('');

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

    // n choose k; no duplicates.
    var outs=[]
    for (var i=0; i<k; ++i) {
      var choice = Math.floor(Math.random()*ins.length);
      outs.push(ins[choice]);
      ins.splice(choice, 1);
    }
    outel.val(outs.join('\n'));

    // items left over are losers and were not picked.
    losersel.val(ins.join('\n'));
  });
}

$(lottery);
