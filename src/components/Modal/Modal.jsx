import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Backdrop } from './Modal.styled';

const rootModal = document.getElementById('modal');

const Modal = props => {
  useEffect(() => {
    const keydownHandler = e => {
      if (e.code !== 'Escape') return;
      props.onCloseModal();
    };

    window.addEventListener('keydown', keydownHandler);
    return () => window.removeEventListener('keydown', keydownHandler);
  }, [props]);

  function backdropClickHandler(e) {
    if (e.currentTarget === e.target) {
      props.onCloseModal();
    }
  }

  // const backdropMode = props.mode === 'dark' ? 'dark' : '';

  return createPortal(
    <Backdrop onClick={backdropClickHandler}>{props.children}</Backdrop>,
    rootModal
  );
};
export default Modal;
