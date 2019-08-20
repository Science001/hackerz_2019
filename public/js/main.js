function turnOff() {
  $("div#topDiv").animate(
    {
      height: "50%",
      opacity: 1
    },
    400
  );
  $("div#bottomDiv").animate(
    {
      height: "50%",
      opacity: 1
    },
    400,
    function() {
      $("div#centerDiv")
        .css({ display: "block" })
        .animate(
          {
            width: "0%",
            left: "50%"
          },
          300,
          () => {
            window.open("/events", "_self");
          }
        );
    }
  );
}

function loaderDot() {
  if (
    $("#txt")
      .text()
      .indexOf("...") !== -1
  ) {
    $("#txt").text("Initializing");
    $("#txt").attr("data-text", "Initializing");
  } else {
    $("#txt").text($("#txt").text() + ".");
    $("#txt").attr("data-text", String($("#txt").attr("data-text")) + ".");
  }
  setTimeout(turnOff, 3000);
}

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
    );
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
        diff = diff > 1 ? `${diff} days left` : `${diff} day left`;
        $("#timer").attr("data-text", `${diff}`);

        c.text(() => {
          return `${diff}`;
        }).reveal(5500);
      }
      // setTimeout(turnOff, 2000);
    }, 500);
  });
});
particlesJS.load("particle-bg", "js/particles-config.json");
