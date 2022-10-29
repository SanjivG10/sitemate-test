const modals = document.querySelectorAll('[data-modal]');

modals.forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
        e.preventDefault();
        const modal = document.getElementById(trigger.dataset.modal);
        modal.classList.add('open');
        const msgContainer = document.getElementsByClassName("msg-container")[0];

        const containerButtons = document.getElementsByClassName("container-button");
        for (const button of containerButtons) {
            button.addEventListener("click", () => {
                modal.classList.remove('open');
                msgContainer.innerHTML = `You just clicked '${button.textContent || button.innerText}'`
                msgContainer.style.display = "block";
            })
        }
    });
});

