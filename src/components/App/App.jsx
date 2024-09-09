import css from './App.module.css';
import fetchImages from '../../js/unsplash-api';
import { useState, useEffect } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import ReactModal from 'react-modal';
import ImageModal from '../ImageModal/ImageModal';

ReactModal.setAppElement('#root');

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  useEffect(() => {
    async function fetchImagesHandler() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImages(query, page);
        const results = data.results;
        if (page === 1) {
          if (results.length === 0) {
            toast('There is no results with this search query', {
              icon: '🙈',
              position: 'top-right',
            });
            return;
          }
          toast.success(`Hooray! We've found ${data.total} images!`, {
            position: 'top-right',
          });
        }
        setIsLastPage(page >= data.total_pages);
        setImages((prevData) => [...prevData, ...results]);
      } catch (error) {
        setError(true);
        toast.error(error.message, { position: 'top-right' });
      } finally {
        setLoading(false);
      }
    }
    if (query) {
      fetchImagesHandler();
    }
  }, [query, page]);

  function onSubmitReset() {
    setPage(1);
    setQuery('');
    setImages([]);
  }

  function openModal(e) {
    e.preventDefault();
    setModalIsOpen(true);
    setModalImage(e.currentTarget.href);
    setModalAlt(e.target.alt);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={css.container}>
      <Toaster />
      <SearchBar onSubmit={setQuery} reset={onSubmitReset} />
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {images.length > 0 && (
        <InfiniteScroll
          dataLength={images.length}
          next={() => {
            setPage(page + 1);
          }}
          hasMore={!isLastPage}
          loader={<Loader />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }>
          <ImageGallery images={images} onModalOpen={openModal} />
        </InfiniteScroll>
      )}
      {loading && <Loader />}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={css.modal}
        overlayClassName={{
          base: css.overlay,
          afterOpen: css.overlayOpen,
          beforeClose: css.overlayClose,
        }}
        bodyOpenClassName={css.body}
        closeTimeoutMS={250}>
        <ImageModal modalImage={modalImage} modalAlt={modalAlt} />
      </ReactModal>
    </div>
  );
}

export default App;
