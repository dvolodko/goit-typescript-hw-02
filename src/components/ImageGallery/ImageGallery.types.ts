type Image = {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
};

type ImageGalleryProps = {
  images: Image[];
  onModalOpen: (regular: string, altDescription: string) => void;
};

export default ImageGalleryProps;
