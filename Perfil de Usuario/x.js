// Todo lo q necesitamos!!

const actualizarFotoBtn = document.querySelector('.actualizar-foto');
const editarPerfilBtn = document.querySelector('.editar-perfil-btn');
const guardarPreferenciasBtn = document.querySelector('.guardar-preferencias-btn');
const productoFavoritoInput = document.getElementById('producto-favorito');
const metodoPagoSelect = document.getElementById('metodo-pago');
const notificacionesCheckbox = document.getElementById('notificaciones');

actualizarFotoBtn.addEventListener('click', () => {
  // Mostrar/ocultar formulario para actualizar foto de perfil
});

editarPerfilBtn.addEventListener('click', () => {
  // Mostrar/ocultar formulario para editar perfil
});

guardarPreferenciasBtn.addEventListener('click', () => {
  // Guardar preferencias del usuario
  const productoFavorito = productoFavoritoInput.value;
  const metodoPago = metodoPagoSelect.value;
  const notificacionesHabilitadas = notificacionesCheckbox.checked;

  // Enviar preferencias al servidor o almacenar localmente
  console.log('Producto Favorito:', productoFavorito);
  console.log('Método de Pago:', metodoPago);
  console.log('Notificaciones Habilitadas:', notificacionesHabilitadas);
});