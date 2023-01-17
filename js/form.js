const inputFirstName = document.querySelector(".input--first-name");
const inputLastName = document.querySelector(".input--last-name");
const inputEmail = document.querySelector(".input--email");
const inputTel = document.querySelector(".input--tel");
const messageBox = document.querySelector(".contact-form--message");
const inputs = [...document.querySelectorAll(".input")];
const btnSubmit = document.querySelector(".btn--submit");

class Form {
  constructor() {
    self = this;

    btnSubmit.addEventListener("click", function (e) {
      self.clearInputs();
    });

    inputTel.addEventListener("keypress", function (e) {
      inputTel.value = self.validateTel(e);
    });
  }

  clearInputs() {
    inputs.forEach((input) => (input.value = ""));
    messageBox.value = "";
  }

  validateTel(e) {
    return e.target.value.replace(/[^0-9]/g, "");
  }
}

export { Form };
