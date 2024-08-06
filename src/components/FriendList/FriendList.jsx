import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <div className={css.friendListContainer}>
      <ul className={css.friendList}>
        {friends.map((item) => {
          return (
            <li key={item.id} className={css.friendCard}>
              <FriendListItem
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
