$(document).ready(function() {
  // Email Regex Function
  var $email_field = $("#id_email");
  var $phone_number_field = $("#id_phone_number");
  var $submit_button = $("#contact-submit-button");
  var email_modal = document.getElementById("validation_failure_modal_email");
  var phone_modal = document.getElementById("validation_failure_modal_phone_number")
  var email_modal_content = document.getElementById("email-modal-content");
  var email_modal_span = document.getElementById("email-validation_modal_span");
  var phone_modal_content = document.getElementById("phone_number-modal-content");
  var phone_number_modal_span = document.getElementById("phone-number-validation_modal_span")

  // This code block uses a regular expression to test that the information being given to the email and phone number fields
  // Will be accepted by django
  
  $submit_button.on("click", function(evt) {
    var email_verification_regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
    var phone_number_verification_regex = /\d{10}/;

    if ($email_field.val() == "" || !email_verification_regex.test($email_field.val())) {
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
    }

    if ($phone_number_field.val() == "" || !phone_number_verification_regex.test($phone_number_field.val())){
      evt.preventDefault();
      phone_modal.style.display = "block";
      phone_number_modal_span.addEventListener("click", closeModal);
      window.addEventListener("click", outsideClick);
      function closeModal(){
        phone_modal.style.display = "none";
      }
      function outsideClick(evt2){
        if (evt2.target == phone_modal) {
          phone_modal.style.display = "none";
        }
      }
    }
  });
});
