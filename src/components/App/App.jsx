import css from './App.module.css';
import fetchImages from '../../js/unsplash-api';
import { useState } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchImagesHandler(query) {
    try {
      setLoading(true);
      const data = await fetchImages(query, 1);
      setImages(data);
    } catch (error) {
      toast.error(error.message, { position: 'top-right' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={css.container}>
      <Toaster />
      <SearchBar onSubmit={fetchImagesHandler} />
      {images.length > 0 && <ImageGallery images={images} />}
    </div>
  );
}

export default App;
