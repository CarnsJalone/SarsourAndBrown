$(document).ready(function() {
  var $chat_bot_image_span = $("#open_close_chat_bot_aside");
  var $chat_bot_image_icon = $("#chat_bot_image");
  var $side_nav_div = $("#chat_bot_side_nav_div");
  var $hover_div = $("#hover_for_live_chat");
  var $mouse_leave_div = $("#created_hover_div");
  var $hover_close_button = $("#live_chat_hover_close_div");
  var $live_chat_close_button = $("#live_chat_live_chat_close_div");
  var $live_chat_inner_div = $("#activate_chat_window_inner_div");
  var $conversation_display = $("#chat_bot_conversation_display_div");
  var $user_input = $("#user_input_div");
  var $submit_button = $("#user_input_submit_div");
  var $activate_chat_modal = $("#activated_chat_full_page_modal");

  var isIE =
    !!navigator.userAgent.match(/Trident/g) ||
    !!navigator.userAgent.match(/MSIE/g);

  if (isIE) {
    console.log("Chatbot is unavailable in Internet Explorer");
    $side_nav_div.css({ display: "none"});
    $chat_bot_image_icon.css({ display: "none" });
    $chat_bot_image_span.css({ display: "none" });
    $hover_div.css({ display: "none" });
    $hover_close_button.css({ display: "none" });
    $mouse_leave_div.css({ display: "none" });
  } else {
    console.log("Not IE");
    $side_nav_div.css({ display: "block"});
    $chat_bot_image_icon.css({ display: "none" });
    $chat_bot_image_span.css({ display: "block" });
    $hover_div.css({ display: "block" });
    $hover_close_button.css({ display: "block" });
    $mouse_leave_div.css({ display: "block" });
  }

  function active_hover() {
    $side_nav_div.css({ width: "10px" });
    $chat_bot_image_icon.css({
      opacity: "1",
      cursor: "pointer",
      display: "block"
    });
    $chat_bot_image_span.css({ right: "-50px" });
    $hover_div.css({
      right: "90px",
      top: "37.5%",
      transform: "rotate(0deg)",
      opacity: "1",
      width: "200px",
      padding: "7.5px",
      cursor: "auto"
    });
    $hover_close_button.css({ right: "172.5px", zIndex: "6" });
    $hover_div.html("Click on Sarsour and Brown logo for live chat.");
    $mouse_leave_div.css({
      width: "297px",
      height: "160px",
      right: "0px",
      top: "36.75%",
      position: "fixed",
      transform: "none",
      margin: "none",
      backgroundColor: "#f2f0ec",
      opacity: ".875",
      zIndex: "5",
      display: "block"
    });
  }

  function inactive_hover() {
    $side_nav_div.css({ width: "0px" });
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
      padding: "2.5px",
      cursor: "pointer"
    });
    $hover_close_button.css({ right: "-172.5px" });
    $hover_div.html("Live Chat");
    $mouse_leave_div.css({ right: "-500px", zIndex: "-1" });
  }

  $hover_close_button.click(function(event) {
    inactive_hover();
  });

  $hover_div.click(function(event) {
    active_hover();
  });

  $chat_bot_image_icon.click(function(event) {
    activate_chat_window();
  });

  var activate_chat_window = function() {
    $side_nav_div.css({ width: "400px" });
    $mouse_leave_div.css({
      width: "20%",
      height: "20%",
      right: "-500px",
      top: "50",
      position: "fixed",
      transform: "none",
      margin: "none",
      backgroundColor: "#262626",
      opacity: ".5",
      zIndex: "-1"
    });
    $chat_bot_image_span.css({
      top: "20px",
      right: "calc(0% + 200px)",
      transform: "rotate(90deg)"
    });
    $chat_bot_image_icon.css({ cursor: "initial" });
    $hover_div.css({ right: "-175%", cursor: "auto" });
    $hover_close_button.css({ right: "-172.5px" });
    $live_chat_close_button.css({ right: "calc(0% + 100px)" });
    $live_chat_inner_div.css({ right: "20px", left: "-340px" });
    $conversation_display.css({
      right: "12.5px",
      left: "-340px",
      top: "28.5px",
      bottom: "-40px"
    });
    $user_input.css({ left: "-335px" });
    $submit_button.css({ right: "256px" });
    $activate_chat_modal.css({ width: "0%" });
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
    $mouse_leave_div.css({ right: "-500px", zIndex: "-1" });
    $live_chat_inner_div.css({ right: "-200px", left: "340px" });
    $conversation_display.css({ right: "-200px", left: "340px" });
    $user_input.css({ left: "335px" });
    $submit_button.css({ right: "-335px" });
    $activate_chat_modal.css({ width: "0%" });
    $hover_div.html("Live Chat");
  }
});
