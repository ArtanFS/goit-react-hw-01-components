import { List } from 'components/List';
import { SectionWrapper } from './SectionWrapper';

export const Statistics = ({ title, stats }) => (
  <SectionWrapper>
    {title && <h2>{title}</h2>}
    <List>
      {stats.map(el => (
        <li key={el.id}>
          <span>{el.label}</span>
          <span>{el.percentage}%</span>
        </li>
      ))}
    </List>
  </SectionWrapper>
);
