import css from "../css/FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p className={isOnline ? css.isOnline : css.isOffline}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </>
  );
};

export default FriendListItem;
