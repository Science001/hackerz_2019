function turnOn() {
  $("div#centerDiv")
    .css({ display: "block" })
    .animate(
      {
        width: "100%",
        left: "0%"
      },
      300,
      () => {
        $("div#topDiv").animate(
          {
            //51% for chrome
            height: "100%",
            opacity: 0
          },
          800
        );
        $("div#bottomDiv").animate(
          {
            //51% for chrome
            height: "100%",
            opacity: 0
          },
          800,
          () => {
            $("div#centerDiv").hide();
            setTimeout(turnOff, 3000);
          }
        );
      }
    );
}

function turnOff() {
  $("div#topDiv").animate(
    {
      //51% for chrome
      height: "50%",
      opacity: 1
    },
    400
  );
  $("div#bottomDiv").animate(
    {
      //51% for chrome
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
            setTimeout(turnOn, 3000);
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
}

$(function () {
  $('.mat-input-outer label').click(function () {
      $(this).prev('input').focus();
  });
  $('.mat-input-outer input').focusin(function () {
      $(this).next('label').addClass('active');
  });
  $('.mat-input-outer input').focusout(function () {
      if (!$(this).val()) {
          $(this).next('label').removeClass('active');
      } else {
          $(this).next('label').addClass('active');
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
    }, 3000);
  });
});
particlesJS.load("particle-bg", "js/particles-config.json");
$('#login-btn').click();

// document.querySelectorAll('input').forEach(inp => {
//   inp.onfocus = e => {
//     console.log(e);
    
//     e.preventDefault();}
// })