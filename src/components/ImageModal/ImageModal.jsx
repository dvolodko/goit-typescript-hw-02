import css from './ImageModal.module.css';

export default function ImageModal({ modalImage, modalAlt }) {
  return <img src={modalImage} alt={modalAlt} className={css.image} />;
}
