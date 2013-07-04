(function() {
  smartly.set({
    position: 'center',
    marginLeft: 150,
    easing: 5
  });

  smartly.all();

  $(function() {
    $('.to-about').css('cursor', 'pointer').on('click', function() {
      return smartly.scroll(a0, a1);
    });
    $('.to-start').css('cursor', 'pointer').on('click', function() {
      return smartly.scroll(b0, b1);
    });
    $('.to-method').css('cursor', 'pointer').on('click', function() {
      return smartly.scroll(c0, c1);
    });
    $('.to-property').css('cursor', 'pointer').on('click', function() {
      return smartly.scroll(i0, i1);
    });
    $('.to-event').css('cursor', 'pointer').on('click', function() {
      return smartly.scroll(l0, l1);
    });
    $('.example').css('cursor', 'pointer');
    $('.basicscroll').on('click', function() {
      return smartly.scroll(a1, b1, c1, d1, e1, f1, g1, h1, i1, c1);
    });
    $('.delay').on('click', function() {
      return smartly.scroll(d2, function() {
        return alert('1秒待ちます');
      }).delay(1000).scroll(d1);
    });
    $('.setleft').on('click', function() {
      return smartly.set({
        position: 'left, top',
        marginLeft: 250
      }).scroll(h1, function() {
        alert();
        return smartly.set({
          position: 'center',
          marginLeft: 150
        }).scroll(h1, function() {
          return alert();
        });
      });
    });
    $('pre').addClass('brush: js');
    SyntaxHighlighter.all();
    return setTimeout(function() {
      return $('.syntaxhighlighter .toolbar').remove();
    }, 300);
  });

}).call(this);

/*
//@ sourceMappingURL=main.js.map
*/