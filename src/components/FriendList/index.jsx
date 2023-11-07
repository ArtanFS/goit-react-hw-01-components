import { FriendListItem } from 'components/FriendListItem';
import { List } from './FriendList.styled';
import friends from '../friends.json';

export const FriendList = () => (
  <List>
    <FriendListItem friends={friends} />
  </List>
);
