import ErrorMessageProps from './ErrorMessage.types';
import css from './ErrorMessage.module.css';

export default function ErrorMessage({ errorMessage }: ErrorMessageProps) {
  return <p className={css.message}>{errorMessage}</p>;
}
