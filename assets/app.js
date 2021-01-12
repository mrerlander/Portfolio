$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown();
  });

$(document).on("submit", "#contact-form", function(event){

event.preventDefault();

  userName = $("#first_name").val().trim() + " " + $("#last_name").val().trim();
  message = $("#message").val().trim();
  company = $("#company").val().trim();
  emailAdd = $("#email").val().trim();

  window.location.href = "mailto:" + emailAdd + "?subject=" + company + "&body=" + message;
  
});