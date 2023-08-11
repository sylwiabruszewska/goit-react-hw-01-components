import PropTypes from 'prop-types';
import StatisticsCSS from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={StatisticsCSS.statistics}>
      {title && <h2 className={StatisticsCSS.title}>{title}</h2>}

      <ul className={StatisticsCSS['stat-list']}>
        {stats.map(({ id, label, percentage }) => {
          const listItemStyle = {
            backgroundColor: getRandomHexColor(), // Tutaj ustawiamy losowy kolor jako styl tła
          };

          return (
            <li className={StatisticsCSS.item} style={listItemStyle} key={id}>
              <span className={StatisticsCSS.label}>{label}</span>
              <span className={StatisticsCSS.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
