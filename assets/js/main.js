/* Start Count Stats */
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
  // Stats Section : Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop - 400) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 700 / goal);
}
/* End Count Stats */

/* Start Popup Gallery  */
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

window.addEventListener("click", function (e) {
  if (e.target == myModal) {
    myModal.style.display = "none";
  }
});

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  /* dots[slideIndex - 1].className += " active"; */
}
/* End Popup Gallery  */

/* Start Nav Bullets */
// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
/* End Nav Bullets */

/* Start NavBar */
// Select All Links
const allLinks = document.querySelectorAll(".navbar-nav a");
/* End NavBar */

function scrollToSomewhere(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();

      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollToSomewhere(allBullets); // For Bullets
scrollToSomewhere(allLinks); // For NavBar

/* End Nav Bullets  */

/* Start Validation Forms  */
const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastNameParent = document.getElementById("lastNameParent");
const firstnameParent = document.getElementById("firstnameParent");
const birthday = document.getElementById("birthday");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const address = document.getElementById("address");
const country = document.getElementById("country");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const lastNameValue = lastName.value.trim();
  const firstNameValue = firstName.value.trim();
  const lastNameParentValue = lastNameParent.value.trim();
  const firstNameParentValue = firstNameParent.value.trim();
  const birthdayValue = birthday.value.trim();
  const emailValue = email.value.trim();
  const mobileValue = mobile.value.trim();
  const addressValue = address.value.trim();
  const countryValue = country.value.trim();

  if (lastNameValue === "") {
    setError(lastName, "Champ Obligatoire");
  } else {
    setSuccess(lastName);
  }

  if (firstNameValue === "") {
    setError(firstName, "Champ Obligatoire");
  } else {
    setSuccess(firstName);
  }

  if (lastNameParentValue === "") {
    setError(lastNameParent, "Champ Obligatoire");
  } else {
    setSuccess(lastNameParent);
  }

  if (firstNameParentValue === "") {
    setError(firstNameParent, "Champ Obligatoire");
  } else {
    setSuccess(firstNameParent);
  }

  if (birthdayValue === "") {
    setError(birthday, "Champ Obligatoire");
  } else {
    setSuccess(birthday);
  }

  if (emailValue === "") {
    setError(email, "Champ Obligatoire");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Adresse e-mail invalide");
  } else {
    setSuccess(email);
  }

  if (mobileValue === "") {
    setError(mobile, "Champ Obligatoire");
  } else if (mobileValue.length !== 10) {
    setError(mobile, "Le numéro de téléphone doit comporter 8 numéros");
  } else {
    setSuccess(mobile);
  }

  if (addressValue === "") {
    setError(address, "Champ Obligatoire");
  } else {
    setSuccess(address);
  }

  if (countryValue === "") {
    setError(country, "Champ Obligatoire");
  } else {
    setSuccess(country);
  }
};
/* End Validation Forms */
