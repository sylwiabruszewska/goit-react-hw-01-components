import css from './FriendListItem.module.css';

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
