import { Container } from './Container.styled';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
import user from 'components/user.json';
import data from 'components/data.json';
import friends from 'components/friends.json';
import transactions from 'components/transactions.json';

export const App = () => (
  <Container>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </Container>
);
