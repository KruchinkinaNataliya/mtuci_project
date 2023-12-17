const loginText = document.querySelector(".title-text .login");
         const loginForm = document.querySelector("form.login");
         const loginBtn = document.querySelector("label.login");
         const signupBtn = document.querySelector("label.signup");
         const signupLink = document.querySelector("form .signup-link a");
         signupBtn.onclick = (()=>{
           loginForm.style.marginLeft = "-50%";
           loginText.style.marginLeft = "-50%";
         });
         loginBtn.onclick = (()=>{
           loginForm.style.marginLeft = "0%";
           loginText.style.marginLeft = "0%";
         });
         signupLink.onclick = (()=>{
           signupBtn.click();
           return false;
         });
          
         function onChange() {
          const password = document.querySelector('input[id=password]');
          const repeat_password = document.querySelector('input[id=repeat_password]');
          if (repeat_password.value === password.value) {
            repeat_password.setCustomValidity('');
          } else {
            repeat_password.setCustomValidity('Пароль не совпадает');
          }
        }