$(document).ready(function() {

animation();

function cheangeMargin() {
let count = 650;
setInterval(function() {
      if (count == 0) {
        clearInterval();
      } else {
      count -= 1;
      count--;
      $(".photo-carousel.active").css({marginLeft: "-"+count+"px"});
    }
}, 1);
}

function zoomTitle() {
  let count1 = 20;
  setInterval(function() {
    if (count1 == 40) {
      clearInterval();
    } else {
      count1++;
      $(".title-carousel").css({fontSize: count1+"px"});
    }
  },40);
}

function moveDescription() {
  let count = 240;
  setInterval(function() {
        if (count == 0) {
          clearInterval();
        } else {
        count -= 1;
        count--;
        $(".description.d-active").css({marginTop: "-"+count+"px"});
      }
  }, 20);
}


function animation() {
  let x = "a";
  setInterval(function() {
    if (x == "a") {
      // First si applica solo all'apertura della pagina, prima che inizi il loop
      $("#product").removeClass("first");
      $(".title-carousel").removeClass("first");
      $(".description").removeClass("first");

      $(".photo-carousel").removeClass("active");
      $("#service").addClass("active");
      $(".title-carousel").text("service");
      zoomTitle()
      // Descrizioni
      $(".description").removeClass("d-active");
      $("#service-description").addClass("d-active");
      moveDescription()
      cheangeMargin();
      x = "b";
    } else if (x == "b") {
      $(".photo-carousel").removeClass("active");
      $("#technology").addClass("active");
      $(".title-carousel").text("technology");
      zoomTitle()
      // Descrizioni
      $(".description").removeClass("d-active");
      $("#technology-description").addClass("d-active");
      moveDescription()
      cheangeMargin();
      x = "c";
    } else if (x == "c") {
      $(".photo-carousel").removeClass("active");
      $("#product").addClass("active");
      $(".title-carousel").text("product");
      zoomTitle()
      // Descrizioni
      $(".description").removeClass("d-active");
      $("#product-description").addClass("d-active");
      moveDescription()
      cheangeMargin();
      x = "a";
    }
  },7000);
}


})
