const trigger = document.querySelector('[data-modal]');
const msgContainer = document.getElementsByClassName("msg-container")[0];
const DEFAULT_MODAL_MESSAGE = "Are you sure you want to continue?";


const addButton = (buttonName, onClick) => {
    const button = document.createElement("button");
    button.innerHTML = buttonName;
    button.onclick = () => {
        const modal = document.getElementById(trigger.dataset.modal);
        modal.classList.remove('open');
        onClick();
    };
    return button;
}

const initModal = (buttons, modalMessage = DEFAULT_MODAL_MESSAGE) => {

    trigger.addEventListener('click', function (e) {
        e.preventDefault();
        const modal = document.getElementById(trigger.dataset.modal);
        modal.classList.add('open');
        const modalContainer = document.querySelector(".modal-container h4");
        modalContainer.innerHTML = modalMessage;

        const allButtonsContainer = document.getElementsByClassName("flex")[0];
        for (const button of buttons) {
            allButtonsContainer.appendChild(button);
        }
        // allButtonsContainer
    });
}

const yesButton = addButton("Yes", () => {
    msgContainer.innerHTML = `You just clicked "Yes"`
    msgContainer.style.display = "block";
})


const cancelButton = addButton("Cancel", () => {
    msgContainer.innerHTML = `You just clicked "Cancel"`
    msgContainer.style.display = "block";
})

const allButtons = [yesButton, cancelButton]

initModal(allButtons);


