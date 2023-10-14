// Obtén referencias a los elementos del formulario
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('celular');
const emailInput = document.getElementById('mail');
const messageInput = document.getElementById('messenger');

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
    alert('El campo Nombre y Apellido es obligatorio.');
  }

  // Validación del campo Celular
  if (phoneInput.value.trim() === '') {
    isValid = false;
    alert('El campo Celular es obligatorio.');
  }

  // Validación del campo Correo Electrónico
  if (emailInput.value.trim() === '') {
    isValid = false;
    alert('El campo Correo Electrónico es obligatorio.');
  } else if (!validateEmail(emailInput.value)) {
    isValid = false;
    alert('El correo electrónico no es válido.');
  }

  // Validación del campo Mensaje
  if (messageInput.value.trim() === '') {
    isValid = false;
    alert('El campo Mensaje es obligatorio.');
  }

  // Evita que el formulario se envíe si no es válido
  if (!isValid) {
    event.preventDefault();
  }
});
