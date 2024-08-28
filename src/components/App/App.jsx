import css from './App.module.css';
import fetchImages from '../../js/unsplash-api';
import { useState, useEffect } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const [images, setImages] = useState([]);

  async function fetchImagesHandler(query) {
    try {
      const data = await fetchImages(query, 1);
      setImages(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className={css.container}>
      <SearchBar onSubmit={fetchImagesHandler} />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
