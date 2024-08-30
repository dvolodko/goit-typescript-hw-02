import ImageCard from '../ImageCard/ImageCard';
import Masonry from 'react-responsive-masonry';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images }) {
  return (
    <Masonry columnsCount={3} gutter="16px" className={css.masonryContainer}>
      {images.map((image) => (
        <div key={image.id}>
          <ImageCard urls={image.urls} altDescription={image.alt_description} />
        </div>
      ))}
    </Masonry>
  );
}
