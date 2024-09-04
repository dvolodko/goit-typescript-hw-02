import toast from 'react-hot-toast';

export default function SearchBar({ onSubmit, reset }) {
  function submitHandler(e) {
    e.preventDefault();
    const query = e.target.elements.input.value.trim();
    if (!query) {
      toast.error('Search query can`t be empty', { position: 'top-right' });
    } else {
      reset();
      onSubmit(query);
      e.target.reset();
    }
  }

  return (
    <header>
      <form onSubmit={submitHandler}>
        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
