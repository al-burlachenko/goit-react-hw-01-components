import s from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <span className={`${s.status} ${s[friend.isOnline]}`}></span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  id: PropTypes.string,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
