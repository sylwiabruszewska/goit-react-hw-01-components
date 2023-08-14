import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  const {
    'transaction-history': table,
    'table-head': tableHead,
    'table-body': tableBody,
    'table-header': tableHeader,
    'table-data': tableData,
    'table-row': tableRow,
  } = css;

  return (
    <table className={table}>
      <thead className={tableHead}>
        <tr>
          <th className={tableHeader}>Type</th>
          <th className={tableHeader}>Amount</th>
          <th className={tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody className={tableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={tableRow}>
            <td className={tableData}>{type}</td>
            <td className={tableData}>{amount}</td>
            <td className={tableData}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
    .isRequired,
};
