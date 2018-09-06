
    $(function() {
      var red = 0;
      var green = 0;
      var blue = 0;
      $(".r").val(0);
      $(".g").val(0);
      $(".b").val(0);

      $(".r").knob({
        'release' : function (r) {
          red = r;
          putColor();
        }
      });
      $(".g").knob({
        'release' : function (g) {
          green = g;
          putColor();
        }
      });
      $(".b").knob({
        'release' : function (b) {
          blue = b;
          putColor();
        }
      });
      function putColor(){
        var color = 'rgb('+red + ',' +green+ ','+blue+ ')';
        $('.color').css('background-color', color);
        // $('.rbg-color').append(color);
      }
    });
