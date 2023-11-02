import { StatisticsList } from './StatisticsList';
import data from './data.json';

export const Statistics = ({ title }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        <StatisticsList stats={data} />
      </ul>
    </section>
  );
};
