import toast from 'react-hot-toast';
import SearchBarProps from './SearchBar.types';
import css from './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';
import { FormEvent } from 'react';

export default function SearchBar({ reset, setQuery }: SearchBarProps) {
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('input') as HTMLInputElement;
    const query = input.value.trim();
    if (!query) {
      toast.error('Search query can`t be empty', { position: 'top-right' });
    } else {
      reset();
      setQuery(query);
      form.reset();
    }
  }

  return (
    <header className={css.header}>
      <form onSubmit={submitHandler} className={css.form}>
        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          <FiSearch />
          Search
        </button>
      </form>
    </header>
  );
}
