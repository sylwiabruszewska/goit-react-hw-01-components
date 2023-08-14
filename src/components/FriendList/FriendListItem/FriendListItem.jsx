import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const { item, avatar: avatarStyles, name: nameStyles } = css;

  return (
    <li className={item}>
      <span className={isOnline ? css['is-online'] : css['is-offline']}></span>
      <img
        className={avatarStyles}
        src={avatar}
        alt={`${name}'s avatar`}
        width="48"
      />
      <p className={nameStyles}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
