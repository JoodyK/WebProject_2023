const validateEmail = (e) => {
    let email = document.getElementById("email");
    if(email.validity.valueMissing){
      e.preventDefault();
      displayErrorMessageByID("email_err", "Email should not be empty!");
      return;
    } else {
      const email_pattern = /^[a-zA-Z0-9_\-\.]/;
      const valid = email_pattern.test(email);
      if(!valid){
        e.preventDefault();
        displayErrorMessageByID("email_err", "Incorrect Email format!");
        return;
      }
    }
  }
  const valide = (e) => { 
    let email= document.getElementById('email');
    if(email.validity.valueMissing){e.preventDefult(); displayErrorMessageByID("email_err","email empty")}
    else{const email_pattern= /^[a-zA-Z0-9_\-\.]/; const valid= email_pattern.test(email);
            if(!valid){displayErrorMessageByID("email_err","invalid email");}}
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    // form event handlers
    const form = document.getElementById("form");
    const submit = document.getElementById("submit_btn");
    form.addEventListener("submit", validateEmail);
    submit.addEventListener("click", validateEmail);
  
    // input elements event handlers
    const allInputs = document.querySelectorAll("input[type='text'], input[type='email']");
    allInputs.forEach(i => {
      i.addEventListener("focus", () => {
        i.classList.remove("invalid");
        i.classList.add("valid");
        const myErrorSpan = document.getElementById(`${i.id}_err`);
        myErrorSpan.innerText = "";
      });
    });
  });
  
  function displayErrorMessageByID(elementID, message){
    const element = document.getElementById(elementID);
    element.innerText = message;
  }