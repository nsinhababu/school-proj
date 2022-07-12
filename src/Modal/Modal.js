import ReactDOM from 'react-dom';

const Modal = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='modal-wrapper'>{children}</div>,

    document.getElementById('modal-root')
  );
};
export default Modal;
