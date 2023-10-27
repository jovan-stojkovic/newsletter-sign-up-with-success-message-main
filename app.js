const subsButton = document.querySelector("#submit");
const emailInput = document.querySelector("#email");
const errorP = document.querySelector("#error");
const conformation = document.querySelector("#conformation");
const home = document.querySelector("#home");
const dismissButton = document.querySelector("#dismiss");
const userEmail = document.querySelector("#user-email");
const patern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

subsButton.addEventListener("click", (e) => {
  let email = emailInput.value;
  e.preventDefault();

  if (email.match(patern)) {
    conformation.classList.add("valid");
    home.classList.add("main-valid");
    userEmail.innerText = email;
  } else if (!email) {
    errorP.innerText = "Please enter your email address";
  } else {
    errorP.innerText = "Valid email required";
  }
});

dismissButton.addEventListener("click", () => window.location.reload());
