$(document).ready(function() {
  // Email Regex Function
  var $email_field = $("#id_email");
  var $submit_button = $("#about_submit_button");
  var modal = document.getElementById("validation_failure_modal");
  var modal_content = document.getElementById("modal-content");
  var modal_span = document.getElementById("validation_modal_span");

  $submit_button.on("click", function(evt) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;

    if ($email_field.val() == "" || !re.test($email_field.val())) {
      evt.preventDefault();
      modal.style.display = "block";
      modal_span.addEventListener("click", closeModal);
      window.addEventListener("click", outsideClick);
      function closeModal() {
        modal.style.display = "none";
      }
      function outsideClick(evt2) {
        if (evt2.target == modal) {
          modal.style.display = "none";
        }
      }
    }
  });
});
