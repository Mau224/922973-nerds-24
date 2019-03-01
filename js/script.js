var controls = document.querySelectorAll('.slide-control');
var slide = document.querySelectorAll('.slide');
var link = document.querySelector(".write");

var popup = document.querySelector(".pop-up");
var close = popup.querySelector(".modal-close");
var iter = 0;



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
function filterRangeSlider() {
  var filterRange = document.querySelector(".filter-range");
  var rangeSlider = document.querySelector(".range-slider");
  var tdLeft = rangeSlider.querySelector(".range-slider__td_left");
  var tdRight = rangeSlider.querySelector(".range-slider__td_right");
  var thumbLeft = rangeSlider.querySelector(".range-slider__thumb_left");
  var thumbRight = rangeSlider.querySelector(".range-slider__thumb_right");
  var thumbWidth = thumbRight.offsetWidth;
  var valueMin = filterRange.querySelector(".filter-range__value_min");
  var valueMax = filterRange.querySelector(".filter-range__value_max");
  var tableWidth = rangeSlider.offsetWidth;
  var ratio = (valueMax.dataset.max_value - valueMin.dataset.min_value) / (tableWidth - thumbWidth * 2);

    function getCoords(elem) {
      var box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    }

    function init() {
      tdLeft.style.width = (Number(valueMin.value) / ratio + Number(thumbWidth)) + "px";
      tdRight.style.width = (Number(tableWidth) - Number(valueMax.value) / ratio - Number(thumbWidth)) + "px";
    }

    thumbLeft.onmousedown = function (evt) {
      var thumbCoords = getCoords(this);//Получаем координаты текущего thumb
      var shiftX = evt.pageX - thumbCoords.left;//Расстояние от клика до левого края thumb
      var sliderCoords = getCoords(tdLeft);//Получаем координаты левого td
      var widthTdRight = tdRight.offsetWidth;//Получаем шинину правого td

      document.onmousemove = function (evt) {
        var newLeft = evt.pageX - sliderCoords.left;//Расстояние от дв.мыши до левого края tdLeft.
        var widthTd = newLeft - shiftX + thumbWidth;//Расчёт ширины перед условиями

        if (newLeft <= shiftX) {
          widthTd = thumbWidth;
        }
        if (widthTd > tableWidth - widthTdRight) {
          widthTd = tableWidth - widthTdRight;
        }
        tdLeft.style.width = widthTd + "px";
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;
        };
        valueMin.value = (tdLeft.offsetWidth - thumbWidth) * ratio;
      };
      return false;
    };

    thumbRight.onmousedown = function (evt) {
      var thumbCoords = getCoords(this);
      var shiftX = thumbWidth - (evt.pageX - thumbCoords.left);
      var sliderCoordsX = getCoords(tdRight).left;
      var widthTdLeft = tdLeft.offsetWidth;
      var widthTdRight = tdRight.offsetWidth;

      document.onmousemove = function (evt) {
        var newRight = sliderCoordsX + widthTdRight - evt.pageX;
        var widthTd = newRight - shiftX + thumbWidth;

        if (newRight <= shiftX) {
          widthTd = thumbWidth;
        }
        if (widthTd > tableWidth - widthTdLeft) {
          widthTd = tableWidth - widthTdLeft;
        }
        tdRight.style.width = widthTd + "px";
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;
        };
        valueMax.value = (tableWidth - tdRight.offsetWidth - thumbWidth) * ratio;
      };
      return false;
    };

    valueMin.addEventListener("keydown", function (evt) {
      var tdLeftMaxWidth = tableWidth - tdRight.offsetWidth;
      if (evt.keyCode === 13 && this.focus) {
        if (this.value < 0) {
          this.value = 0;
          tdLeft.style.width = thumbWidth + "px";
        }
        if (this.value > (tdLeftMaxWidth - thumbWidth) * ratio) {
          this.value = (tdLeftMaxWidth - thumbWidth) * ratio;
          tdLeft.style.width = tdLeftMaxWidth + "px";
        }
        if (0 <= this.value <= (tdLeftMaxWidth - thumbWidth) * ratio) {
          tdLeft.style.width = (Number(this.value) / ratio + Number(thumbWidth)) + "px";
        }
        this.select();
      }
    });

    valueMax.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 13 && this.focus) {
        if (+this.value < +valueMin.value) {
          this.value = valueMin.value;
          tdRight.style.width = (Number(thumbWidth) - Number(tdLeft.offsetWidth)) + "px";
        }
        if (this.value > (tableWidth - thumbWidth * 2) * ratio) {
          this.value = (tableWidth - thumbWidth * 2) * ratio;
          tdRight.style.width = (Number(thumbWidth) - Number(thumbWidth)) + "px";
        }
        if (valueMin.value <= this.value <= (tableWidth - thumbWidth * 2) * ratio) {
          tdRight.style.width = (Number(tableWidth) - Number(valueMax.value) / ratio - Number(thumbWidth)) + "px";
        }
        this.select();
      }
    });

    thumbLeft.ondragstart = function () {
      return false;
    };

    init();
  }

  filterRangeSlider();



