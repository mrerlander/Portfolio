$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown();
  });

$(document).on("submit", "#contact-form", function(event){

event.preventDefault();

  name = $("#first_name").val().trim() + " " + $("#last_name").val().trim();
  message = $("#message").val().trim();
  company = $("#company").val().trim();
  emailAdd = $("#email").val().trim();


  emailjs.send("gmail","portfolio",{from_name: name, message: message, company_name: company, reply_to: emailAdd});

  $("#form-sub").text("Email Sent");
  $("#form-sub").prop("disabled", true);
});