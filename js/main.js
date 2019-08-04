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
let b = baffle("#txt").start();
const eventDate = new Date(2019, 8, 6);
$("#logo").hide();
$(document).ready(() => {
  $("#logo").fadeIn("slow", () => {
    let diff = Math.floor(
      new Date(eventDate - Date.now()) / 1000 / 60 / 60 / 24
    );
    setTimeout(() => {
      if (diff == 1) {
        b.text(() => "1 day to go!").reveal(5500);
        $("#txt").attr('data-text', "1 day to go!");
      }else if (diff < 1) {
        b.text(() => "We're back!").reveal(5500);
        $("#txt").attr('data-text', "We're back!");
      } else {
        let c = baffle("#timer").start();

        b.text(() => "We'll be back in").reveal(5500);
        $("#txt").attr('data-text', "We'll be back in");
        
        diff = diff > 1 ? `${diff} days` : `${diff} day`;
        $("#timer").attr("data-text", `${diff}`);

        c.text(() => {

          return `${diff}`
        }).reveal(5500);
      }
    }, 3000);
  });
});
particlesJS.load("particle-bg", "js/particles-config.json");
