import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <img className={css.avatar} src={avatar} alt={name} />
      <span className={css.name}>{name}</span>
      <p className={`${css.status} ${isOnline ? css.online : css.offline}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;