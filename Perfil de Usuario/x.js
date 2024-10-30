// Todo lo q necesitamos!!

const editarPerfilBtn = document.querySelector('.editar-perfil-btn');
const editarPerfilModal = document.querySelector('.editar-perfil-modal');
const closeButton = document.querySelector('.close-button');
const guardarPerfilBtn = document.querySelector('.guardar-perfil-btn');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const ubicacionInput = document.getElementById('ubicacion');

editarPerfilBtn.addEventListener('click', () => {
  editarPerfilModal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  editarPerfilModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == editarPerfilModal) {
    editarPerfilModal.style.display = 'none';
  }
});
                                //Ojalá funcione
guardarPerfilBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  // Actualizar los datos del perfil
  document.querySelector('.perfil-nombre').textContent = nombreInput.value;
  document.querySelector('.perfil-email').textContent = emailInput.value;
  document.querySelector('.perfil-ubicacion').textContent = ubicacionInput.value;

  // Cerrar el modal
  editarPerfilModal.style.display = 'none';
});

const mainpageBtn = document.querySelector('.mainpage-btn');

mainpageBtn.addEventListener('click', () => {
  window.location.href = 'P-GINA-WEB\MainPage.html'; // Reemplaza 'mainpage.html' con la URL de tu página principal
});

// Validación en tiempo real del correo
emailInput.addEventListener('input', () => {
    const emailValido = /\S+@\S+\.\S+/.test(emailInput.value);
    if (!emailValido) {
        emailInput.style.borderColor = 'red';
    } else {
        emailInput.style.borderColor = '';
    }
});

// Animación del modal
editarPerfilBtn.addEventListener('click', () => {
    editarPerfilModal.classList.remove('hidden');
    editarPerfilModal.classList.add('show-modal');
});

closeButton.addEventListener('click', () => {
    editarPerfilModal.classList.remove('show-modal');
    editarPerfilModal.classList.add('hidden');
});

// Ejemplo: calcula el progreso del perfil basado en campos completados
function calcularProgresoPerfil() {
    let progreso = 0;
    if (nombreInput.value) progreso += 25;
    if (emailInput.value) progreso += 25;
    if (ubicacionInput.value) progreso += 25;
    if (document.querySelector('.perfil-imagen img').src) progreso += 25;
    
    document.querySelector('.barra-progreso').style.width = `${progreso}%`;
    document.querySelector('.perfil-progreso p').textContent = `Perfil ${progreso}% Completo`;
}

// Llama a esta función después de cada actualización del perfil
guardarPerfilBtn.addEventListener('click', calcularProgresoPerfil);

// Muestra la notificación y desaparece después de 3 segundos
function mostrarNotificacion() {
    const notificacion = document.getElementById('notificacion');
    notificacion.classList.add('show');
    setTimeout(() => notificacion.classList.remove('show'), 3000);
}

// Llama a mostrarNotificacion después de guardar cambios en el perfil
guardarPerfilBtn.addEventListener('click', (event) => {
    event.preventDefault();
    calcularProgresoPerfil();
    mostrarNotificacion();
});



