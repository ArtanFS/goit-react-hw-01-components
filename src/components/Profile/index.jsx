import { List } from 'components/List';
import { SectionWrapper } from './SectionWrapper';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <SectionWrapper>
    <div>
      <img src={avatar} alt="User avatar" width="120" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
    <List>
      <li>
        <span>Followers </span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </List>
  </SectionWrapper>
);
