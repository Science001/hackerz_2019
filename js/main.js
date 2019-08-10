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
    }, 3000);
  });
});
particleConfig = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#0a557b"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#082640",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "grab"
      },
      onclick: {
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
particlesJS.load("particle-bg", "js/particles-config.json");
// $('#login-btn').click();

// document.querySelectorAll('input').forEach(inp => {
//   inp.onfocus = e => {
//     console.log(e);

//     e.preventDefault();}
// })
