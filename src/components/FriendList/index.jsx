import { FriendListItem } from 'components/FriendListItem';
import { List } from './FriendList';
import friends from '../friends.json';

export const FriendList = () => (
  <List>
    <FriendListItem friends={friends} />
  </List>
);
