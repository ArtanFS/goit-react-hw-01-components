import { ListItem } from './ListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <ListItem color={isOnline ? 'green' : 'red'}>
    <span></span>
    <img src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </ListItem>
);
