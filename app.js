const subsButton = document.querySelector("#submit");
const emailInput = document.querySelector("#email");
const errorP = document.querySelector("#error");
const test =
  '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i';

// const validate = (emailInput.value) => {return String(emailInput.value).toLowerCase().match(test)};

const validate = (emailInput.value) => {

  return email.match(test)
};


subsButton.addEventListener("click", (e) => {
  const email = emailInput.value;
  errorP.innerText = "test";
  e.preventDefault();
  console.log(email);


});
