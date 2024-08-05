const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");
const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");
const zip = document.getElementById("zip");
const zipError = document.querySelector("#zip + span.error");
const pass = document.getElementById("password");
const passError = document.querySelector("#password + span.error");
const passConfirm = document.getElementById("passwordConfirmation");
const passConfirmError = document.querySelector(
  "#passwordConfirmation + span.error"
);
const submitBtn = document.querySelector("button");

email.addEventListener("blur", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    emailShowError();
  }
});

function emailShowError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
}

country.addEventListener("blur", (event) => {
  if (country.validity.valid) {
    countryError.textContent = "";
    countryError.className = "error";
  } else {
    countryShowError();
  }
});

function countryShowError() {
  if (country.validity.valueMissing) {
    countryError.textContent = "You need to enter a country.";
  }
}

zip.addEventListener("blur", (event) => {
  if (zip.validity.valid) {
    zipError.textContent = "";
    zipError.className = "error";
  } else {
    zipShowError();
  }
});

function zipShowError() {
  if (zip.validity.valueMissing) {
    zipError.textContent = "You need to enter a zip code.";
  } else if (zip.validity.patternMismatch) {
    zipError.textContent = "You need to enter a valid zip code.";
  }
}

pass.addEventListener("blur", (event) => {
  if (pass.validity.valid) {
    passError.textContent = "";
    passError.className = "error";
  } else {
    passShowError();
  }
});

function passShowError() {
  if (pass.validity.valueMissing) {
    passError.textContent = "Please enter a password.";
  } else if (pass.validity.tooShort) {
    passError.textContent = `Password should be at least ${pass.minLength} characters; you entered ${pass.value.length}.`;
  }
}

passConfirm.addEventListener("input", (event) => {
  if (pass.value != passConfirm.value) {
    passConfirmShowError();
  } else if (passConfirm.validity.valid) {
    passConfirm.className = "";
    passConfirmError.textContent = "";
    passConfirmError.className = "error";
  } else {
    passConfirmShowError();
  }
});

function passConfirmShowError() {
  if (passConfirm.validity.valueMissing) {
    passConfirmError = "Please confirm your password.";
  } else if (pass.value != passConfirm.value) {
    passConfirmError.textContent = "Passwords do not match!";
    passConfirm.className = "passwordInvalid";
  }
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const passwordsMatch = pass.value == passConfirm.value;
  if (email.validity.valid && country.validity.valid && zip.validity.valid && pass.validity.valid && passConfirm.validity.valid && passwordsMatch) {
    window.alert("Everything is valid!");
  } else {
    window.alert("Something is amiss!");
  }
});