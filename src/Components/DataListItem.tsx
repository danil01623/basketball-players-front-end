import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import PlayerImage from "../assets/images/player.png";
import classes from "../styles/List.module.css";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { favoriteActions } from "../store/favorite-slice";
import { Player } from "../Models/player.model";

interface DataListItemInterface {
  player: Player;
}

const DataListItem = (props: DataListItemInterface) => {
  const { player } = props;
  const dispatch = useAppDispatch();
  const favoriteList = useAppSelector(
    (state: any) => state.favorites.favoriteList
  );
  const [isFavorited, setFavorited] = useState<boolean>(false);

  const checkExistingItem = useCallback(() => {
    return favoriteList.find(
      (favorite: any) => favorite.name === player?.last_name
    );
  }, [favoriteList, player?.last_name]);

  useEffect(() => {
    // Checking if item is already favorited in redux
    const existingItem = checkExistingItem();
    if (existingItem) {
      setFavorited(true);
    } else {
      setFavorited(false);
    }
  }, [checkExistingItem]);

  const addToFavoriteHandler = (event: React.MouseEvent<SVGElement>) => {
    // add item to favorites in redux
    event.preventDefault();
    const existingItem = checkExistingItem();
    if (!existingItem) {
      dispatch(favoriteActions.addItemToFavorite(player));
    } else {
      const name = existingItem?.last_name;
      dispatch(favoriteActions.removeItemFromFavorite(name));
    }
  };

  return (
    <div className={classes.card}>
      <Link to={{ pathname: `player/${player?.id}` }} state={{ player }}>
        <div
          className={classes.icon}
          style={{ ...(isFavorited ? { color: "red" } : { color: "yellow" }) }}
        >
          <FaHeart onClick={addToFavoriteHandler} />
        </div>
        <div className={classes.cardImage}>
          <img src={PlayerImage} alt={player?.last_name} />
        </div>
        <div className={classes.cardContent}>
          <h3>
            {player?.first_name} {player?.last_name}
          </h3>
          <span>Click for more information</span>
        </div>
      </Link>
    </div>
  );
};

export default DataListItem;
