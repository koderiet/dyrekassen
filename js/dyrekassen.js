(function ($) {

  function renderSizes(){
    var winWidth = $( window ).width();

    var hDivider = 1.7625;
    var hHeight = 800;

    if ($("body").hasClass("not-front")) {
       hDivider = 4.02857;
       hHeight = 350;
    }

    if(winWidth<1410) {
      $('header.carousel').width(winWidth);
      $('header.carousel').height(winWidth/hDivider);
    } else {
      $('header.carousel').width(1410);
      $('header.carousel').height(hHeight);
    }

    if ($("body").hasClass("is-front")) {
      if(winWidth<992) {
        $('header.carousel').height(300);
        $('.negtop').css("margin-top",0);
      } else {
        $('.negtop').css("margin-top","-170px");
      }
    }

    if ($("body").hasClass("not-front")&&winWidth>992) {
      if($('.menubox').height()>$('.content').height()) {
        $('.content').height(($('.menubox').height()-190));
      }
    } else {
      $('header.carousel').height(200);
    }


  }

  $(window).load(function() {
    renderSizes();
  });


  $(window).resize(function(){
     renderSizes();
  });


  $('.carousel').carousel({
      interval: 500000 //changes the speed
  })


})(jQuery);
