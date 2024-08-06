import css from './TransactionHistory.module.css';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

export default function TransactionHistory({ items }) {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead className={css.tableHead}>
          <tr className={css.tableHeadRow}>
            <th className={css.tableHeadElement}>Type</th>
            <th className={css.tableHeadElement}>Amount</th>
            <th className={css.tableHeadElement}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            return (
              <TransactionHistoryItem
                key={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
