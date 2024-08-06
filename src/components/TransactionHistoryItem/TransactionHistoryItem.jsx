import css from './TransactionHistoryItem.module.css';

export default function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={css.tableRow}>
      <td className={css.tableData}>{type}</td>
      <td className={css.tableData}>{amount}</td>
      <td className={css.tableData}>{currency}</td>
    </tr>
  );
}
