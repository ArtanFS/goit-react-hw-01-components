import clsx from 'clsx';

export const FriendListItem = ({ friends }) =>
  friends.map(el => (
    <li className="item" key={el.id}>
      <span
        className={clsx('status', el.isOnline ? 'online' : 'offline')}
      ></span>
      <img className="avatar" src={el.avatar} alt="User avatar" width="48" />
      <p className="name">{el.name}</p>
    </li>
  ));
