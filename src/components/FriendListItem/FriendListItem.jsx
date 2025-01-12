import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.friendItem}>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p
        className={clsx(
          css.friendStatus,
          isOnline && css.isOnline,
          !isOnline && css.isOffline
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
}
