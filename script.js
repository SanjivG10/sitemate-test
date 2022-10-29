const modals = document.querySelectorAll('[data-modal]');
let buttonClickedByUser = null;
const DEFAULT_MODAL_MESSAGE = "Are you sure you want to continue?";

const initModal = (modalMessage = DEFAULT_MODAL_MESSAGE) => {

    modals.forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            const modal = document.getElementById(trigger.dataset.modal);
            modal.classList.add('open');
            const msgContainer = document.getElementsByClassName("msg-container")[0];
            const modalContainer = document.querySelector(".modal-container h4");
            modalContainer.innerHTML = modalMessage;

            const containerButtons = document.getElementsByClassName("container-button");
            for (const button of containerButtons) {
                button.addEventListener("click", () => {
                    modal.classList.remove('open');
                    const buttonName = button.textContent || button.innerText
                    msgContainer.innerHTML = `You just clicked "${buttonName}"`
                    buttonClickedByUser = buttonName;
                    msgContainer.style.display = "block";
                })
            }
        });
    });
}

initModal();


