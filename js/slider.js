const images = [...document.querySelectorAll(".image-container")];
const dotsContainer = document.querySelector(".slider__dots-container");

class Slider {
  _activeSlide = 0;
  _btnLeft = document.querySelector(".slider__button--left");
  _btnRight = document.querySelector(".slider__button--right");
  _slides = 0;

  constructor() {
    this._slides = images.length;

    const self = this;

    this.createDots();
    this.goToSlide(0);
    this.activateDot(0);

    this._btnLeft.addEventListener("click", function () {
      self.goToSlide(self._activeSlide - 1);
    });

    this._btnRight.addEventListener("click", function () {
      self.goToSlide(self._activeSlide + 1);
    });

    dotsContainer.addEventListener("click", function (e) {
      if (!e.target.classList.contains("dot")) return;

      const idx = +e.target.classList.value.at(-1);

      self.goToSlide(idx);
      self.activateDot(idx);
    });
  }

  goToSlide(idx) {
    if (idx > this._slides - 1) {
      this._activeSlide = 0;
    } else if (idx < 0) {
      this._activeSlide = this._slides - 1;
    } else {
      this._activeSlide = idx;
    }

    this.activateDot(this._activeSlide);

    images.forEach((image, i) => {
      image.style.transform = `translateX(${(i - this._activeSlide) * 100}%)`;
    });
  }

  createDots() {
    for (let i = 0; i < this._slides; i++) {
      dotsContainer.insertAdjacentHTML(
        `beforeend`,
        `<li class="dot dot--${i}">&nbsp;</li>`
      );
    }
  }

  activateDot(idx) {
    [...dotsContainer.children].forEach((dot) =>
      dot.classList.remove("dot--active")
    );

    [...dotsContainer.children][idx].classList.add("dot--active");
  }
}

export { Slider };
