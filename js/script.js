var link = document.querySelector(".write");

  var popup = document.querySelector(".pop-up");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });
