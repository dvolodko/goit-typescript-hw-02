import css from './ImageCard.module.css';

export default function ImageCard({ urls: { small }, altDescription }) {
  return <img className={css.image} src={small} alt={altDescription}></img>;
}
