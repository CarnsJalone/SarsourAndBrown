$(document).ready(function() {
  // Email Regex Function
  var $email_field = $("#id_email");
  var $phone_number_field = $("#id_phone_number");
  var $submit_button = $("#contact-submit-button");
  var email_modal = document.getElementById("validation_failure_modal_email");
  var phone_modal = document.getElementById(
    "validation_failure_modal_phone_number"
  );
  var email_modal_content = document.getElementById("email-modal-content");
  var email_modal_span = document.getElementById("email-validation_modal_span");
  var phone_modal_content = document.getElementById(
    "phone_number-modal-content"
  );
  var phone_number_modal_span = document.getElementById(
    "phone-number-validation_modal_span"
  );

  var $form_submit_loader_div = $("#form_full_page_modal_loader");
  var $form_submit_loader_ul = $("#form_submit_loader_ul");
  var $form_submit_loader_li = $(".form_submit_loader_li");

  // On-Click Function executed when the user submits the form
  $submit_button.on("click", function(evt) {
    var email_verification_regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|edu|mil|biz|info|int|mobi|mil|name|arpa|aero|jobs|museum)\b/;
    var phone_number_verification_regex = /\d{10}/;

    // This function verifies the email input field against the regex test
    function email_regex_validation() {
      if (
        $email_field.val() == "" ||
        !email_verification_regex.test($email_field.val())
      ) {
        evt.preventDefault();
        email_modal.style.display = "block";
        email_modal_span.addEventListener("click", closeModal);
        window.addEventListener("click", outsideClick);
        function closeModal() {
          email_modal.style.display = "none";
        }
        function outsideClick(evt2) {
          if (evt2.target == email_modal) {
            email_modal.style.display = "none";
          }
        }
        return false;
      } else {
        return true;
      }
    }

    // This function verifies the phone number field against the regex test
    function phone_regex_validation() {
      if (
        $phone_number_field.val() == "" ||
        !phone_number_verification_regex.test($phone_number_field.val())
      ) {
        evt.preventDefault();
        phone_modal.style.display = "block";
        phone_number_modal_span.addEventListener("click", closeModal);
        window.addEventListener("click", outsideClick);
        function closeModal() {
          phone_modal.style.display = "none";
        }
        function outsideClick(evt2) {
          if (evt2.target == phone_modal) {
            phone_modal.style.display = "none";
          }
        }
        return false;
      } else {
        return true;
      }
    }

    email_regex_validation();
    phone_regex_validation();

    function verify_and_display() {
      if (
        email_regex_validation() == true &&
        phone_regex_validation() == true
      ) {
        $form_submit_loader_div.css("display", "block");
      } else {
        return false;
      }
    }

    verify_and_display();

    // End On Click Function Event
  });

  // Admin Page Delete Button Function
  // Will ask the user to confirm whether or not they want to permanently delete
  // An entry
  $delete_entry_button = $("#profile_entries_delete_button.btn.btn-danger");
  $delete_entry_button.on("click", function(event) {
    var confirmation = confirm(
      "Are you sure you wish to permanently delete this entry?"
    );
    if (!confirmation) {
      event.preventDefault();
    } else {
      return true;
    }
  });

  // About page hover function

  var $card_card = $(".about_specialization_card_card");

  $card_card.hover(function(event) {
    if ($(window).width() >= 1500) {
      $(this)
        .children("div")
        .children("h3")
        .css({
          fontSize: "2.5em",
          textShadow: "10px 10px 10px #262626"
        });
    } else if ($(window).width() >= 1200 && $(window).width() <= 1499) {
      $(this)
        .children("div")
        .children("h3")
        .css({
          fontSize: "2.5em",
          textShadow: "10px 10px 10px #262626"
        });
    } else if ($(window).width() >= 979 && $(window).width() <= 1199) {
      $(this)
        .children("div")
        .children("h3")
        .css({
          fontSize: "2.5em",
          textShadow: "10px 10px 10px #262626"
        });
    } else if ($(window).width() >= 769 && $(window).width() <= 978) {
      $(this)
        .children("div")
        .children("h3")
        .css({
          fontSize: "2.5em",
          textShadow: "10px 10px 10px #262626"
        });
    } else if ($(window).width() >= 480 && $(window).width() <= 768) {
      $(this)
        .children("div")
        .children("h3")
        .css({
          fontSize: "2.0em",
          textShadow: "10px 10px 10px #262626"
        });
    } else if ($(window).width() >= 200 && $(window).width() <= 479) {
      $(this)
        .children("div")
        .children("h3")
        .css({
          fontSize: "1.5em",
          textShadow: "10px 10px 10px #262626"
        });
    } else {
      $(this)
        .children("div")
        .children("h3")
        .css({
          fontSize: "1.25em",
          textShadow: "10px 10px 10px #262626"
        });
    }
  });

  $card_card.mouseleave(function() {
    if ($(window).width() >= 1500) {
      $(this)
        .children("div")
        .children("h3")
        .css({
          fontSize: "1.75em",
          textShadow: "none"
        });
    } else if ($(window).width() >= 1200 && $(window).width() <= 1499) {
      $(this)
        .children("div")
        .children("h3")
        .css({
          fontSize: "1.75em",
          textShadow: "none"
        });
    } else if ($(window).width() >= 979 && $(window).width() <= 1199) {
      $(this)
        .children("div")
        .children("h3")
        .css({
          fontSize: "1.75em",
          textShadow: "none"
        });
    } else if ($(window).width() >= 769 && $(window).width() <= 978) {
      $(this)
        .children("div")
        .children("h3")
        .css({
          fontSize: "1.5em",
          textShadow: "none"
        });
    } else if ($(window).width() >= 480 && $(window).width() <= 768) {
      $(this)
        .children("div")
        .children("h3")
        .css({
          fontSize: "1.25em",
          textShadow: "none"
        });
    } else if ($(window).width() >= 200 && $(window).width() <= 479) {
      $(this)
        .children("div")
        .children("h3")
        .css({
          fontSize: "1.0em",
          textShadow: "none"
        });
    } else {
      $(this)
        .children("div")
        .children("h3")
        .css({
          fontSize: ".75em",
          textShadow: "0px 0px 10px #fff"
        });
    }
  });
});
