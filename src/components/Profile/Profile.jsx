import PropTypes from 'prop-types';
import {
  ProfileContatner,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Items,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile(props) {
  return (
    <ProfileContatner>
      <Description>
        <Avatar src={props.avatar} alt="User avatar" />
        <Name>{props.username}</Name>
        <Tag>@{props.tag}</Tag>
        <Location>{props.location}</Location>
      </Description>

      <Stats>
        <Items>
          <Label>Followers</Label>
          <Quantity>{props.followers}</Quantity>
        </Items>
        <Items>
          <Label>Views</Label>
          <Quantity>{props.views}</Quantity>
        </Items>
        <Items>
          <Label>Likes</Label>
          <Quantity>{props.likes}</Quantity>
        </Items>
      </Stats>
    </ProfileContatner>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
