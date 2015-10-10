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
    var inlist = raw.split(/\r?\n/);

    var n = inlist.length;
    if (n < k) {
      error.html("Cannot choose "+k+" from "+n+".");
      return;
    }

    // m choose n; no duplicates.
    var outlist=[]
    for (var i=0; i<k; ++i) {
      var choice = Math.floor(Math.random()*inlist.length);
      outlist.push(inlist[choice]);
      inlist.splice(choice, 1);
    }
    outel.val(outlist.join('\n'));
  });
}

$(lottery);
