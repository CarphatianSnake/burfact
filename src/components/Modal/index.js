// Components
import Navigation from '../Navigation';
import OrderNow from '../OrderNow';

// Styles
import './Modal.scss';

// Handler for closin modal. Exported to use at Navigation component
export function onModalClose(setIsModalOpen) {
  setIsModalOpen(false);
  document.body.classList.remove('block-scroll');
}

// Component
function Modal({ isModalOpen, setIsModalOpen }) {

  const modalClassList = isModalOpen ? 'modal' : 'modal modal__hide';

  return (
    <div className={modalClassList}>
      <div className="modal_wrapper">
        <button
          className="modal_close-btn"
          onClick={() => onModalClose(setIsModalOpen)}
        />
        <Navigation setIsModalOpen={setIsModalOpen} />
        <OrderNow />
      </div>
    </div>
  );
}

export default Modal;