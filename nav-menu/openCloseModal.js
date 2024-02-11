class Modal {
    closeButton;
    openButton;
    modal;

    constructor(openButton, closeButton, modal) {
        let openButtons = document.getElementsByClassName(openButton);
        let closeButtons = document.getElementsByClassName(closeButton);
        let modals = document.getElementsByClassName(modal);

        openButtons = Array.from(openButtons);
        closeButtons = Array.from(closeButtons);
        modals = Array.from(modals);

        this.openButton = openButtons[0];
        this.closeButton = closeButtons[0];
        this.modal = modals[0];
        this.iniciar();
    }

    iniciar() {
        this.openButton.addEventListener('click', () => {
            this.modal.classList.remove("hidden");
        });
        this.closeButton.addEventListener('click', () => {
            this.modal.classList.add("hidden");
        });
    }
    mostrarElementos() {
        console.log(this.openButton)
        console.log(this.closeButton)
        console.log(this.modal)
    }
}

ingresarCliente = new Modal("new-card-button", "new-close-button", "new-person");
