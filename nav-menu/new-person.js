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

//GPT

document.addEventListener('DOMContentLoaded', function () {
    const inputPhoto = document.querySelector('.new-photo');

    inputPhoto.addEventListener('change', function () {
      const file = inputPhoto.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
          const photoPreview = document.querySelector('.new-photo');
          photoPreview.style.backgroundImage = `url('${e.target.result}')`;
        };

        reader.readAsDataURL(file);
      }
    });
  });