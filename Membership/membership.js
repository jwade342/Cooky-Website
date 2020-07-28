"use strict";

// global variables
var profile = {};
var objectString;

/* Validation functions
------------------------------------------*/

function validateName() {
  var lnInput = document.getElementById("lName");
  var fnInput = document.getElementById("fName");

  lnInput.style.background = "";
  fnInput.style.background = "";

  profile.fullName = fnInput.value + " " + lnInput.value;

  document.getElementById("profileName").innerHTML = profile.fullName;
  document.getElementById("profile").style.display = "block";

}

function validatePostal() {
  var codeInput = document.getElementById("code");
  var errorDiv = document.getElementById("codeError");

  try {
    if (/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}^[ABCEGHJKLMNPRSTVXY]{1} *\d{1}^[ABCEGHJKLMNPRSTVXY]{1}\d{1}$/i.test(codeInput.value) === false) {
      throw "Postal code must use a0a0a0 format";     
    }

    codeInput.style.background = "";
    errorDiv.style.background = "";
    errorDiv.innerHTML = "";

    profile.value = codeInput.value;

  } catch (msg) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;

    codeInput.style.background = "rbg(255,233,233)";
  }

}

function validateAge() {
  var ageInput = document.getElementById("age");
  var errorDiv = document.getElementById("ageError");

  try {
    if (ageInput.value < 18) {
      throw "You must be at least 18 to register";
    } else if (ageInput.value < 0) {
      throw "Please enter a valid age"
    }

    ageInput.style.background = "";
    errorDiv.style.background = "none";
    errorDiv.innerHTML = "";

    profile.age = ageInput.value;

    document.getElementById("profileAge").innerHTML = profile.age;
    document.getElementById("profile").style.display = "block";

  } catch (msg) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;

    ageInput.style.background = "rge(255,233,233)";
  }
}

function validateEmail() {
  var emailInput = document.getElementById("email");
  var errorDiv = document.getElementById("emailError");

  try {
    if (emailInput.value.search("@") === -1 || emailInput.value.lastIndexOf(".") === -1) {
      throw "Please provide a valid email address";
    }

    emailInput.style.background = "";
    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";

    emailInput.value = emailInput.value.toLowerCase();
    profile.email = emailInput.value;

    document.getElementById("profileEmail").innerHTML = profile.email;
    document.getElementById("profile").style.display = "block";
    document.getElementById("profileEmail").style.display = "block";

  } catch (msg) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    emailInput.style.background = "rgb(255, 233, 233)";
  }
}

function validatePassword() {
  var pw1Input = document.getElementById("pwd");
  var pw2Input = document.getElementById("pwd2");
  var errorDiv = document.getElementById("passwordError");
  
  try {
    if (/.{8,}/.test(pw1Input.value) === false) {
      throw "Password must be at least 8 characters";
    } else if (pw1Input.value.localeCompare(pw2Input.Value) === 0) {
      throw "Password must match";
    } else if (/[a-zA-Z]/.test(pw1Input.value) === false) {
      throw "Password must contain at least one letter";
    } else if (/[A-Z]/.test(pw1Input.value) === false) {
      throw "Password must contain at least one capital letter";
    } else if (/\d/.test(pw1Input.value) === false) {
      throw "Password must contain at least one number";
    } else if (/[!@#_]/.test(pw1Input.value) === false) {
      throw "Password must contain at least one of the following symbols: ! @ # _";
    }
    pw1Input.style.background = "";
    pw2Input.style.background = "";
    errorDiv.style.display = "none";
    errorDiv.innerHTML = "";

    profile.password = pw1Input.value;

  } catch (msg) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = msg;
    pw1Input.style.background = "rgb(255,233,233)";
    pw2Input.style.background = "rgb(255,233,233)"; 
  }
}

function converToString() {
  objectString = JSON.stringify(profile);
}


/* Event Listener
------------------------------------------*/

// document.getElementById("submit").addEventListener("click", validateEmail, false);

function setUpPages() {
  var nameInput = document.getElementById("lName");
  var ageInput = document.getElementById("age");
  var emailInput = document.getElementById("email");
  var codeInput = document.getElementById("code");
  var pwdInput = document.getElementById("pwd2");

  nameInput.addEventListener("change", validateName, false);
  ageInput.addEventListener("change", validateAge, false);
  emailInput.addEventListener("change", validateEmail, false);
  codeInput.addEventListener("change", validatePostal, false);
  pwdInput.addEventListener("change", validatePassword, false);
}

if (window.addEventListener) {
  window.addEventListener("load", setUpPages, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", setUpPages);
}