const levers = [...document.querySelectorAll(".review-lever")];
const reviews = [...document.querySelectorAll(".review")];
const leversContainer = document.querySelector(".review-box__levers");

class ReviewBox {
  _activeLever = 0;

  constructor() {
    this.activateReview(this._activeLever);

    self = this;

    leversContainer.addEventListener("click", function (e) {
      if (!e.target.classList.contains("review-lever")) return;

      const idx = +e.target.classList[1].at(-1) - 1;

      self.activateLever(idx);
      self.activateReview(idx);
    });
  }

  activateReview(idx) {
    reviews.forEach((review) => review.classList.remove("review--active"));
    reviews[idx].classList.add("review--active");
  }

  activateLever(idx) {
    levers.forEach((lever) => lever.classList.remove("review-lever--active"));
    levers[idx].classList.add("review-lever--active");
  }
}

export { ReviewBox };
