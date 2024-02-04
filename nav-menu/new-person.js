const openModalBtn = document.getElementById('open-new-person');
const closeModalBtn = document.getElementById('close-new-person');
const myModal = document.getElementById('new-person-modal');

// Función para abrir el modal
openModalBtn.addEventListener('click', () => {
    myModal.showModal();
});

// Función para cerrar el modal
closeModalBtn.addEventListener('click', () => {
    myModal.close();
});