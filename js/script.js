var controls = document.querySelectorAll('.slide-control');
var slide = document.querySelectorAll('.slide');
var link = document.querySelector(".write");

var popup = document.querySelector(".pop-up");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var Name = popup.querySelector("[name=name]");
var iter = 0;

var isStorageSupport = true;
var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
      Name.value = storage;
      Login.focus();
    } else {
      Name.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !Name.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });

for (var i = 0; i < controls.length; i++) {
  controls[i].onclick = function(evt) {
  evt.preventDefault();
  var j = this.getAttribute('data-slide');

  changeSlide(slide[j])
  this.classList.add('active');
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
  };


