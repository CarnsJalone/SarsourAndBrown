$(document).ready(function() {
  var $chat_bot_image_span = $("#open_close_chat_bot_aside");
  var $chat_bot_image_icon = $("#chat_bot_image");
  var $side_nav_div = $("#chat_bot_side_nav_div");

  function light_up() {
    $side_nav_div.css("display", "block");
    $chat_bot_image_icon.css({ opacity: "1", cursor: "pointer" });
    $chat_bot_image_span.css({right: "-25px"})
  }

  function dim() {
    $side_nav_div.css("display", "none");
    $chat_bot_image_icon.css({ opacity: ".5", cursor: "auto" });
    $chat_bot_image_span.css({right: "-60px"})
  }

  $chat_bot_image_icon.hover(
    function() {
      light_up();
    },
    function() {
      dim();
    }
  );

  
});
