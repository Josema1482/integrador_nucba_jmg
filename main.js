document.addEventListener('DOMContentLoaded', function() {
    // Obtén referencias a los elementos del formulario
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('celular');
    const emailInput = document.getElementById('mail');
    const messageInput = document.getElementById('messenger');
  
    // Obtén referencias a los elementos de mensaje de error
    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('celular-error');
    const emailError = document.getElementById('mail-error');
    const messageError = document.getElementById('messenger-error');
  
    // Agrega un listener para el evento 'submit' del formulario
    form.addEventListener('submit', function (event) {
      // Inicializa una variable para rastrear si el formulario es válido
      let isValid = true;
  
      // Función de validación de correo electrónico
      function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
  
      // Validación del campo Nombre y Apellido
      if (nameInput.value.trim() === '') {
        isValid = false;
        nameError.textContent = 'El campo Nombre y Apellido es obligatorio.';
      } else {
        nameError.textContent = ''; // Borra el mensaje de error si el campo es válido.
      }
  
      // Validación del campo Celular
      if (phoneInput.value.trim() === '') {
        isValid = false;
        phoneError.textContent = 'El campo Celular es obligatorio.';
      } else {
        phoneError.textContent = '';
      }
  
      // Validación del campo Correo Electrónico
      if (emailInput.value.trim() === '') {
        isValid = false;
        emailError.textContent = 'El campo Correo Electrónico es obligatorio.';
      } else if (!validateEmail(emailInput.value)) {
        isValid = false;
        emailError.textContent = 'El correo electrónico no es válido.';
      } else {
        emailError.textContent = '';
      }
  
      // Validación del campo Mensaje
      if (messageInput.value.trim() === '') {
        isValid = false;
        messageError.textContent = 'El campo Mensaje es obligatorio.';
      } else {
        messageError.textContent = '';
      }
  
      // Evita que el formulario se envíe si no es válido
      if (!isValid) {
        event.preventDefault();
      }
    });
  });
  
  
  
