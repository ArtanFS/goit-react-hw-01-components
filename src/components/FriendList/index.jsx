import { FriendListItem } from 'components/FriendListItem';
import friends from '../friends.json';

export const FriendList = () => (
  <ul className="friend-list">
    <FriendListItem friends={friends} />
  </ul>
);
