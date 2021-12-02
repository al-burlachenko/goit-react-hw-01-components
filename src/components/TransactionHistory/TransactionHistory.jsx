import PropTypes from 'prop-types';
import {
  TransactionContainer,
  TransactionHeader,
  TransactionData,
  TransactionRow,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionContainer>
      <thead>
        <tr>
          <TransactionHeader>Type</TransactionHeader>
          <TransactionHeader>Amount</TransactionHeader>
          <TransactionHeader>Currency</TransactionHeader>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionRow key={item.id}>
            <TransactionData>{item.type}</TransactionData>
            <TransactionData>{item.amount}</TransactionData>
            <TransactionData>{item.currency}</TransactionData>
          </TransactionRow>
        ))}
      </tbody>
    </TransactionContainer>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
