import { ListItem } from './ListItem';

export const FriendListItem = ({ friends }) =>
  friends.map(el => (
    <ListItem key={el.id} color={el.isOnline ? 'green' : 'red'}>
      <span></span>
      <img src={el.avatar} alt="User avatar" width="48" />
      <p>{el.name}</p>
    </ListItem>
  ));
