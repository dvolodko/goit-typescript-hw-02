import css from './SearchBox.module.css';

function SearchBox({ value, onFilter }) {
  return (
    <div className={css.wrapper}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={css.searchInput}></input>
    </div>
  );
}

export default SearchBox;
