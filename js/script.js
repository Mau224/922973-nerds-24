var controls = document.querySelectorAll('.slide-control');
var slide = document.querySelectorAll('.slide');
var link = document.querySelector(".write");
var popup = document.querySelector(".pop-up");
var close = popup.querySelector(".modal-close");
var iter = 0;
var swap = document.querySelectorAll(".dot");


  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    });

});

for (var i = 0; i < controls.length; i++) {
  controls[i].onclick = function(evt) {
  evt.preventDefault();
  var j = this.getAttribute('data-slide');
  changeSlide(slide[j])
  this.classList.add('active')



  }
}

  function changeSlide(elem) {
  for (var j = 0; j < slide.length; j++) {
  slide[j].classList.remove('active');
  controls[j].classList.remove('active');
  }
  elem.classList.add('active');






  iter++;
  if (iter>2)iter=0;
  }

;

