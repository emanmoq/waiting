jQuery(function ($) {
  var seconds = $("#timerNum");
  var timer;
  function myFunction() {
  
      if (seconds > 0) { // so it doesn't go to -1
          seconds--;
      }
      if (seconds == 0) {
       $(".spin").css("display","none") 
      }
  }
  if (!timer) {
      timer = window.setInterval(function () {
          myFunction();
      }, 1000); // every second
  }
});

