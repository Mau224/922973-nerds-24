var link = document.querySelector(".write");
var popup = document.querySelector(".pop-up");
var close = popup.querySelector(".modal-close");
var controls = document.querySelectorAll('.slide-control');
var slide = document.querySelectorAll('.slide');
var iter = 0;

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    });
    setInterval(function() {
      changeSlide(slide[iter])
      }, 1000)

    for (var i = 0; i < controls.length; i++) {
      controls[i].onclick = function(evt) {
      evt.preventDefault();
      var j = this.getAttribute('data-slide');
      changeSlide(slide[j])

      }
      }

      function changeSlide(elem) {
      for (var j = 0; j < slide.length; j++) {
      slide[j].classList.remove('active');
      }
      elem.classList.add('active');
      }
      elem.classList.add('active');
      iter++;
      if (iter > 2) iter = 0;

});
