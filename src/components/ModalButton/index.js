// React
import { useState } from 'react';

// Components
import Modal from '../Modal';

// Styles
import './ModalButton.scss';

// Component
function ModalButton() {

  const [ isModalOpen, setIsModalOpen ] = useState(false);

  function onModalOpen() {
    setIsModalOpen(true);
    document.body.classList.add('block-scroll');
  }

  return (
    <>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <button
        className="modal_btn"
        onClick={onModalOpen}
      />
    </>
  );
}

export default ModalButton;