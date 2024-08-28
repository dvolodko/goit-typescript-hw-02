import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard urls={image.urls} altDescription={image.alt_description} />
        </li>
      ))}
    </ul>
  );
}
