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
let b = baffle(".glitch").start();

$("#logo").hide();
$("#logo").fadeIn("slow", () => {
  //   $("#logo").hide();
  // turnOff();
  // $("#logo").zoomIn(2);
  b.text(currentText => "We'll be back in").reveal(1500);
});
