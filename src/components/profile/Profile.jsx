import css from './Profile.module.css';
import PropTypes from 'prop-types';
import { AiOutlineLike } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';

const Profile = ({ userName, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={userName} className={css.avatar} />
        <p className={css.name}>{userName}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantiny}>
            <IoPeople />
            {stats.followers}
          </span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantiny}>
            <FaEye />
            {stats.views}
          </span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantiny}>
            <AiOutlineLike />
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};
export default Profile;
