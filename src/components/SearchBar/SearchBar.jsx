export default function SearchBar({ onSubmit }) {
  function submitHandler(e) {
    e.preventDefault();
    const query = e.target.elements.input.value;
    onSubmit(query);
    e.target.reset();
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
