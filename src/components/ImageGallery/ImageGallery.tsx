import ImageCard from '../ImageCard/ImageCard';
import ImageGalleryProps from './ImageGallery.types';
import css from './ImageGallery.module.css';

export default function ImageGallery({
  images,
  onModalOpen,
}: ImageGalleryProps) {
  return (
    <div className={css.container}>
      <ul className={css.gallery}>
        {images.map((image) => (
          <li key={image.id} className={css.galleryItem}>
            <ImageCard
              urls={image.urls}
              altDescription={image.alt_description}
              onModalOpen={onModalOpen}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
