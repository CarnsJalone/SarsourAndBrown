$(document).ready(function() {
  var $chat_bot_image_span = $("#open_close_chat_bot_aside");
  var $chat_bot_image_icon = $("#chat_bot_image");
  var $side_nav_div = $("#chat_bot_side_nav_div");
  var $hover_div = $("#hover_for_live_chat");
  var $mouse_leave_div = $("#created_hover_div");
  var $hover_close_button = $("#live_chat_hover_close_div");
  var $live_chat_close_button = $("#live_chat_live_chat_close_div");

  function active_hover() {
    $side_nav_div.css("display", "block");
    $chat_bot_image_icon.css({
      opacity: "1",
      cursor: "pointer",
      display: "block"
    });
    $chat_bot_image_span.css({ right: "-25px" });
    $hover_div.css({
      right: "90px",
      top: "37.5%",
      transform: "rotate(0deg)",
      opacity: "1",
      width: "200px",
      padding: "7.5px"
    });
    $hover_close_button.css({ right: "172.5px" });
    $hover_div.html("Click on Sarsour and Brown logo for live chat.");
    $mouse_leave_div.css({
      display: "block",
      width: "25%",
      height: "30%",
      right: "-5",
      top: "30%",
      position: "fixed",
      transform: "none",
      margin: "none",
      backgroundColor: "#262626",
      opacity: ".375"
    });
  }

  function inactive_hover() {
    $side_nav_div.css("display", "none");
    $chat_bot_image_icon.css({
      opacity: ".5",
      cursor: "auto",
      display: "none"
    });
    $chat_bot_image_span.css({ right: "-100px" });
    $hover_div.css({
      right: "-25px",
      top: "45.5%",
      transform: "rotate(-90deg)",
      opacity: ".75",
      width: "75px",
      padding: "2.5px"
    });
    $hover_close_button.css({ right: "-172.5px" });
    $hover_div.html("Live Chat");
    $mouse_leave_div.css({ display: "none" });
  }

  $hover_close_button.click(function(event) {
    inactive_hover();
  });

  $hover_div.mouseenter(function(event) {
    active_hover();
  });

  $chat_bot_image_icon.click(function(event) {
    activate_chat_window();
  });

  var activate_chat_window = function() {
    $side_nav_div.css({ width: "400px" });
    $mouse_leave_div.css({
      display: "block",
      width: "20%",
      height: "20%",
      right: "-5",
      top: "50",
      position: "fixed",
      transform: "none",
      margin: "none",
      backgroundColor: "#262626",
      opacity: ".5"
    });
    $chat_bot_image_span.css({
      top: "20px",
      right: "15%",
      transform: "rotate(90deg)"
    });
    $hover_div.css({ display: "none" });
    $hover_close_button.css({ right: "-172.5px" });
    $live_chat_close_button.css({ right: "5%" });
  };

  $live_chat_close_button.click(function() {
    return_to_browser();
  });

  function return_to_browser() {
    $live_chat_close_button.css({ right: "-75%" });
    $side_nav_div.css({ width: "0px" });
    $chat_bot_image_span.css({
      top: "50%",
      transform: "translateY(-50%)",
      right: "-100px"
    });
    $hover_div.css({
      right: "-25px",
      top: "45.5%",
      opacity: ".75",
      width: "75px",
      padding: "2.5px",
      display: "block",
      textAlign: "center",
      transform: "rotate(-90deg)",
      cursor: "pointer"
    });
    $mouse_leave_div.css({display: "none"})

    $hover_div.html("Live Chat");
  }
});
