$(document).ready(function(){
  var zindex = 10;
  
  $("div.ui-card").click(function(e){
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.card-container").hasClass("showing")) {
      // a card is already in view
      $("div.ui-card.show")
        .removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.card-container")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.card-container")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });
});