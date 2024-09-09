import css from './ImageCard.module.css';

export default function ImageCard({
  urls: { small, regular },
  altDescription,
  onModalOpen,
}) {
  return (
    <a href={regular} onClick={onModalOpen}>
      <img className={css.image} src={small} alt={altDescription}></img>
    </a>
  );
}
