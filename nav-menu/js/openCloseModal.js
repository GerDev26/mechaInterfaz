class Modal {

    constructor(openButton, closeButton, modal, index) {
        if(index === null | index === NaN | index === undefined){
            index = 0;
        }
        this.openButton = document.querySelectorAll(`.${openButton}`)[index];
        this.closeButton = document.querySelectorAll(`.${closeButton}`)[index];
        this.modal = document.querySelectorAll(`.${modal}`)[index];
    }

    cerrarAbrir() {
        this.openButton.addEventListener('click', () => {
            this.modal.classList.remove("desplazamientoSuperior"); 
            this.modal.classList.add("desplazamientoInferior");
            this.modal.classList.remove("hidden");
        });

        this.closeButton.addEventListener('click', () => {
            this.modal.classList.remove("desplazamientoInferior");
            this.modal.classList.add("desplazamientoSuperior");
            setTimeout(() => {
                this.modal.classList.add("hidden");
            }, 150); // Ajusta este tiempo al tiempo de duración de tu animación
        });
    }

    mostrarElementos() {
        console.log(this.openButton);
        console.log(this.closeButton);
        console.log(this.modal);
    }
}

// Crear instancia de Modal con el índice especificado
ingresarCliente = new Modal("new-card-button", "new-close-button", "new-person");
ingresarCliente.cerrarAbrir();
