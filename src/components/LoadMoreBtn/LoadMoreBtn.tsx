import { FiChevronsDown } from 'react-icons/fi';
import LoadMoreBtnProps from './LoadMoreBtn.types';
import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ loadMoreImages }: LoadMoreBtnProps) {
  return (
    <button className={css.button} onClick={loadMoreImages}>
      <FiChevronsDown />
      Load more
    </button>
  );
}
