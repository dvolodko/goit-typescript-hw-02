import Modal from 'react-modal';

import ImageModalProps from './ImageModal.types';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({
  modalIsOpen,
  closeModal,
  modalImage,
  modalAlt,
}: ImageModalProps) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={{
        base: css.overlay,
        afterOpen: css.overlayOpen,
        beforeClose: css.overlayClose,
      }}
      bodyOpenClassName={css.body}
      closeTimeoutMS={500}>
      <img src={modalImage} alt={modalAlt} className={css.image} />;
    </Modal>
  );
}
