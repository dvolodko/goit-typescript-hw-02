import ImageCardProps from './ImageCard.types';
import css from './ImageCard.module.css';

export default function ImageCard({
  urls: { small, regular },
  altDescription,
  onModalOpen,
}: ImageCardProps) {
  return (
    <img
      className={css.image}
      src={small}
      alt={altDescription}
      onClick={() => onModalOpen(regular, altDescription)}></img>
  );
}
