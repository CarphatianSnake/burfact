// Handler for closing modal
function onModalClose(setIsModalOpen) {
  setIsModalOpen(false);
  document.body.classList.remove('block-scroll');
}

export default onModalClose;