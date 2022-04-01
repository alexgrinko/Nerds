const contactsLink = document.querySelector('.button-contacts');
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.button-close');
const modalLogin = modal.querySelector('.modal-name');
const modalEmail = modal.querySelector('.modal-email');
const modalForm = modal.querySelector('.answer-form');
const modalText = modal.querySelector('.modal-text');

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem('name');
} catch (err) {
    isStorageSupport = false;
}

contactsLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.add('modal-block');
    if (storage) {
        modalLogin.value = storage;
        modalEmail.focus();
    } else {
        modalLogin.focus();
    }
});

modalClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.remove('modal-block');
    modal.classList.remove('modal-error');
});

modalForm.addEventListener('submit', function(evt) {
    if (!modalLogin.value || !modalEmail.value) {
        evt.preventDefault();
        modal.classList.remove('modal-error');
        modal.offsetWidth = modal.offsetWidth;
        modal.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem('name', modalLogin.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modal.classList.remove('modal-block')) {
            evt.preventDefault();
            modal.classList.remove('modal-block');
            modal.classList.remove('modal-error');
        }
    }
});