import css from './App.module.css';
import fetchImages from '../../js/unsplash-api';
import { useState } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchImagesHandler(query) {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchImages(query, 1);
      setImages(data);
    } catch (error) {
      setError(true);
      toast.error(error.message, { position: 'top-right' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={css.container}>
      <Toaster />
      <SearchBar onSubmit={fetchImagesHandler} />
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader />}
    </div>
  );
}

export default App;
