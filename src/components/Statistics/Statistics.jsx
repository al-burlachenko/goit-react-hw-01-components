import s from './Statistics.module.css';
import PropTypes from 'prop-types';

import randomColor from '../../utils/colorRandomizer';

export default function Statistics({ stats, title }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            className={s.item}
            style={{ backgroundColor: randomColor() }}
            key={stat.id}
          >
            {/* <StatisticsData label={stat.label} percentage={stat.percentage} /> */}
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    }).isRequired,
  ),
  title: PropTypes.string,
};
