var slideIndex = 1;

//SEGONS BANNERS AUTO 

let interval = setInterval(function () {
  plusSlides(1);
}, 6000);

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  clearInterval(interval);
  if (document.getElementsByClassName("mySlides")!=undefined) {
    interval = setInterval(function () {
      plusSlides(1);
    }, 6000);
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
}


var mc = new Hammer.Manager(document.getElementById('slide_container'));
var swipe = new Hammer.Swipe();
mc.add(swipe);
mc.on("swipeleft swiperight", function (ev) {
  if (ev.type == 'swipeleft') {
    plusSlides(1)
  } else if (ev.type == 'swiperight') {
    plusSlides(-1)
  }
});