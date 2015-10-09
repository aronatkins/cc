function lottery() {
  $('#lottery').submit(function(event) {
    event.preventDefault();

    var inel = $("textarea[name='in']");
    var outel = $("textarea[name='out']");
    var n = $("input[name='n']").val();

    var inlist = inel.val().trim().split(/\r?\n/);

    var m = inlist.length;
    if (m < n) {
      alert("cannot choose "+n+" from "+m);
      return
    }

    // m choose n; no duplicates.
    var outlist=[]
    for (var i=0; i<n; ++i) {
      var choice = Math.floor(Math.random()*inlist.length);
      outlist.push(inlist[choice]);
      inlist.splice(choice, 1);
    }
    outel.val(outlist.join('\n'));
  });
}

$(lottery);
