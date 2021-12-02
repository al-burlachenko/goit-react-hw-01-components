import PropTypes from 'prop-types';
import { List, Item, Avatar, Name, Status } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <Item key={friend.id}>
          <Status statusType={friend.isOnline}></Status>
          <Avatar src={friend.avatar} alt="User avatar" width="48" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  id: PropTypes.string,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
