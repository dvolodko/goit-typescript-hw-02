import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendCardContainer}>
      <img src={avatar} alt={name} width="48" className={css.friendAvatar} />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(css.friendStatus, isOnline ? css.online : css.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
