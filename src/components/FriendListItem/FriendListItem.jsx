import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <div className={css.container}>
        <img className={css.image} src={avatar} alt="Avatar" width="48" />
        <p className={css.text}>{name}</p>
        <p className={isOnline ? css.isOnline : css.isOffline}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </>
  );
};

export default FriendListItem;
