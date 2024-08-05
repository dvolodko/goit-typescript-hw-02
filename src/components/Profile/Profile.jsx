import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileContainer}>
      <div className={css.profileCard}>
        <div className={css.profileInfo}>
          <img className={css.image} src={image} alt="User avatar" />
          <p className={css.profileName}>{name}</p>
          <p className={css.profileTag}>@{tag}</p>
          <p className={css.profileLocation}>{location}</p>
        </div>

        <ul className={css.statsList}>
          <li className={css.statsItem}>
            <span>Followers</span>
            <span className={css.statsNumber}>{stats.followers}</span>
          </li>
          <li className={css.statsItem}>
            <span>Views</span>
            <span className={css.statsNumber}>{stats.views}</span>
          </li>
          <li className={css.statsItem}>
            <span>Likes</span>
            <span className={css.statsNumber}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
