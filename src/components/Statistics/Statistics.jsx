import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatisticsData from '../StatisticsData/StatisticsData';

export default function Statistics({ stats, title }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(stat => (
          <li className={s.item} key={stat.id}>
            <StatisticsData label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
  title: PropTypes.number,
};
