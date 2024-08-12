import css from './Options.module.css';

function Options({ options, setter, total, reset }) {
  return (
    <div className={css.container}>
      <button onClick={() => setter(options[0])} className={css.button}>
        {options[0]}
      </button>
      <button onClick={() => setter(options[1])} className={css.button}>
        {options[1]}
      </button>
      <button onClick={() => setter(options[2])} className={css.button}>
        {options[2]}
      </button>
      {total > 0 && (
        <button onClick={reset} className={css.button}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
