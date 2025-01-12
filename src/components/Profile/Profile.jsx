import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div>
        <img className={css.profileAvatar} src={image} alt={name} />
        <p className={css.username}>{name}</p>
        <p className={css.tagAndLocation}>@{tag}</p>
        <p className={css.tagAndLocation}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsListItem}>
          <span>Followers</span>
          <span className={css.numbers}>{stats.followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span>Views</span>
          <span className={css.numbers}>{stats.views}</span>
        </li>
        <li className={css.statsListItem}>
          <span>Likes</span>
          <span className={css.numbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
