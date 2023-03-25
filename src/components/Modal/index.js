// Components
import Navigation from '../Navigation';
import OrderNow from '../OrderNow';

// Utils
import onModalClose from './onModalClose';

// Styles
import './Modal.scss';

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