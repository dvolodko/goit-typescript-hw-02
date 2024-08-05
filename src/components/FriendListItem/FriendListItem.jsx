import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p
        className={clsx(
          css.friendStatus,
          isOnline ? css.friendStatusOnline : css.friendStatusOffline
        )}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
