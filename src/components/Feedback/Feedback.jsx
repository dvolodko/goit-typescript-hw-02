import css from './Feedback.module.css';

function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <div className={css.container}>
      <p className={css.optionText}>Good: {good}</p>
      <p className={css.optionText}>Neutral: {neutral}</p>
      <p className={css.optionText}>Bad: {bad}</p>
      <p className={css.optionText}>Total: {total}</p>
      <p className={css.optionText}>Positive: {positive}%</p>
    </div>
  );
}

export default Feedback;
