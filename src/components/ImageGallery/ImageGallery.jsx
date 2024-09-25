import ImageCard from '../ImageCard/ImageCard';
import Masonry from 'react-responsive-masonry';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, onModalOpen }) {
  return (
    <Masonry
      columnsCount={3}
      gutter="16px"
      containerTag={'ul'}
      itemTag={'li'}
      className={css.masonryContainer}>
      {images.map((image) => (
        <div key={image.id}>
          <ImageCard
            urls={image.urls}
            altDescription={image.alt_description}
            onModalOpen={onModalOpen}
          />
        </div>
      ))}
    </Masonry>
  );
}
