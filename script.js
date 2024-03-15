let success = document.getElementById('success');
let main = document.getElementById('main');
let btn = document.getElementById('subform');
let disBtn = document.getElementById('dismiss');
let InputEmail = document.getElementById('email');
let emailName = document.getElementById('emailName');



btn.addEventListener('click', (e) => {
    e.preventDefault();

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

      if(validateEmail(InputEmail.value)){
    success.classList.remove('success-mess');
    main.classList.add('main-hide');
    emailName.innerHTML = InputEmail.value;
    emailName.style.fontWeight = 'bold';
      } else {
        InputEmail.style.border = '1px solid red';
        InputEmail.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
       }
});

disBtn.addEventListener('click', (e) => {
    e.preventDefault();
    success.classList.add('success-mess') 
    main.classList.remove('main-hide');
});

validateEmail(InputEmail.value);