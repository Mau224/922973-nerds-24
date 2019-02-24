var link = document.querySelector(".write");
var popup = document.querySelector(".pop-up");
var close = popup.querySelector(".modal-close");


  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    });

  });
