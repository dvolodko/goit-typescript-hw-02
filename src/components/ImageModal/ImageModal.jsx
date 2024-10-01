import Modal from 'react-modal';

import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({
  modalIsOpen,
  closeModal,
  modalImage,
  modalAlt,
}) {
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
      <ImageModal modalImage={modalImage} modalAlt={modalAlt} />
      <img src={modalImage} alt={modalAlt} className={css.image} />;
    </Modal>
  );
}
