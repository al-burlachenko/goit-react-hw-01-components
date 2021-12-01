import PropTypes from 'prop-types';
import s from './StatisticsData.module.css';

export default function StatisticsData({ label, percentage }) {
  return (
    <>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage} %</span>
    </>
  );
}

StatisticsData.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
