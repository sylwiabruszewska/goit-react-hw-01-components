export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img
        className="avatar"
        src={avatar}
        alt={`${name}'s avatar`}
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};
