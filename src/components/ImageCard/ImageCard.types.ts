type ImageCardProps = {
  urls: { small: string; regular: string };
  altDescription: string;
  onModalOpen: (regular: string, altDescription: string) => void;
};

export default ImageCardProps;
