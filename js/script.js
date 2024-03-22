document.querySelector('#formularioRegistro').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  // const text = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const errorEmail = document.querySelector('#errorEmail');
  const errorPassword = document.querySelector('#errorPassword');
  
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  // document.getElementById("usuario").innerHTML = text;

  //* miguel@correo.com "la regex para este caso retorna: true "
  //* miguel "la regex para este caso retorna: false "

  let isValid = true;
  // true -> !true => false
  // false -> !false => true

  if(!regexEmail.test(email)) {
    errorEmail.textContent= 'El email no es valido';
    errorEmail.style.display = 'block';
    console.log('If: email');
    isValid=false;
  }

  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
 
  if(!regexPassword.test(password)) {
    errorPassword.textContent= 'La contraseña no es válida, Debe contener al menos una letra mayúscula, una minúscula, un número y tener al menos 8 caracteres';
    errorPassword.style.display = 'block';
    console.log('If: password');
    isValid = false;
  }


  // email.textContent='';
  // password.textContent='';
  
  if(isValid) {
    alert('Formulario se envio correctamente');
        window.location.href='login.html'
    // document.getElementById("usuario").innerText = text;
      
  }
});
document.querySelector('#formularioRegistro1').addEventListener('submit', function(event) {
  event.preventDefault();
  const email1 = document.querySelector('#email1').value;
  // const text1 = document.querySelector('#email1').value;
  const password1 = document.querySelector('#password1').value;
  const errorEmail1 = document.querySelector('#errorEmail1');
  const errorPassword1 = document.querySelector('#errorPassword1');
  
  const regexEmail1 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  // document.getElementById("usuario").innerHTML = text;

  //* miguel@correo.com "la regex para este caso retorna: true "
  //* miguel "la regex para este caso retorna: false "

  let isValid = true;
  // true -> !true => false
  // false -> !false => true

  if(!regexEmail1.test(email1)) {
    errorEmail1.textContent= 'El email no es valido';
    errorEmail1.style.display = 'block';
    console.log('If: email1');
    isValid=false;
  }

  const regexPassword1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
 
  if(!regexPassword1.test(password1)) {
    errorPassword1.textContent= 'La contraseña no es válida, Debe contener al menos una letra mayúscula, una minúscula, un número y tener al menos 8 caracteres';
    errorPassword1.style.display = 'block';
    console.log('If: password1');
    isValid = false;
  }


  // email.textContent='';
  // password.textContent='';
  
  if(isValid) {
    alert('Formulario se envio correctamente');
        window.location.href='index.html'
    // document.getElementById("usuario").innerText = text1;
      
  }
});
