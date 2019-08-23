$(function() {
  $(".mat-input-outer label").click(function() {
    $(this)
      .prev("input")
      .focus();
  });
  $(".mat-input-outer input").focusin(function() {
    $(this)
      .next("label")
      .addClass("active");
  });
  $(".mat-input-outer input").focusout(function() {
    if (!$(this).val()) {
      $(this)
        .next("label")
        .removeClass("active");
    } else {
      $(this)
        .next("label")
        .addClass("active");
    }
  });
});
let b = baffle("#txt").start();
const eventDate = new Date(2019, 8, 6);
$("#logo").hide();
$(document).ready(() => {
  $("#logo").fadeIn("slow", () => {
    let diff = Math.floor(
      new Date(eventDate - Date.now()) / 1000 / 60 / 60 / 24
    )+1;
    setTimeout(() => {
      if (diff < 1) {
        b.text(() => "Initialization Completed.").reveal(5500);
        $("#txt").attr("data-text", "Initialization Completed.");
        $(".lds-ring").fadeOut(2300);
      } else {
        let c = baffle("#timer").start();

        b.text(() => "Initializing...").reveal(5500);
        $("#txt").attr("data-text", "Initializing...");
        setInterval(loaderDot, 1000);
        diff = diff > 1 ? `${diff} DAYS TO GO` : `${diff} day left`;
        $("#timer").attr("data-text", `${diff}`);

        c.text(() => {
          return `${diff}`;
        }).reveal(5500);
      }
      // setTimeout(turnOff, 2000);
    }, 0);
  });
});
particlesJS.load("particle-bg", "js/particles-config.json");
