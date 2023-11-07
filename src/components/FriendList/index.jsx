import { FriendListItem } from 'components/FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <List>
    {friends.map(el => (
      <FriendListItem
        key={el.id}
        avatar={el.avatar}
        name={el.name}
        isOnline={el.isOnline}
      />
    ))}
  </List>
);
