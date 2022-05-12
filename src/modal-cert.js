(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-certificate]'),
    closeModalBtn: document.querySelector('[data-modal-close-certificate]'),
    modal: document.querySelector('[data-modal-certificate]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('body-fixed');
  }
})();
