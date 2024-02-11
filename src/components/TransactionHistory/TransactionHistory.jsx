import css from "./TransactionHistory.module.css";

const TransactionHistory = (items) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.headers}>Type</th>
          <th className={css.headers}>Amount</th>
          <th className={css.headers}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {items.items.map((item) => {
          return (
            <tr className={css.line} key={item.id}>
              <td className={css.rows}>{item.type}</td>
              <td className={css.rows}>{item.amount}</td>
              <td className={css.rows}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
