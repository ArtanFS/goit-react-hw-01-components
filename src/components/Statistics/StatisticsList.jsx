export const StatisticsList = ({ stats }) => {
  return stats.map(el => (
    <li className="item" key={el.id}>
      <span className="label">{el.label}</span>
      <span className="percentage">{el.percentage}</span>
    </li>
  ));
};
