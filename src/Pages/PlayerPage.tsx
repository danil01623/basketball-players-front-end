import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// Componetns
import Loader from "../Shared/Loader";
import ItemInfo from "../Shared/ItemInfo";
import Button from "../Shared/Button";
// Hooks
import { useHttpClient } from "../Hooks/http-hook";
// Image
import PlayerImage from "../assets/images/player.png";
// Styling
import classes from "../styles/Item.module.css";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// TODO use Error and clearError properties from useHttpClient hook
// Need to show error and after that to clear it

const PlayerPage = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const location = useLocation();
  const navigate = useNavigate();
  const [item, setItem] = useState<any>(location?.state?.player || {});
  const { playerId } = useParams();

  useEffect(() => {
    // if there is no data passed from routing then fetch again by id
    if (!item?.id && playerId) {
      const fetchPlayerById = async () => {
        try {
          const responseData = await sendRequest(
            `${API_BASE_URL}/api/players/${playerId}`
          );
          setItem(responseData);
        } catch (err) {}
      };

      fetchPlayerById();
    }
  }, [item?.id, sendRequest]);

  const backHandler = () => {
    navigate("/");
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={classes.pageContainer}>
        <div className={classes.backButton}>
          <Button text="Go back" onClick={backHandler} />
        </div>
        <div className={classes.itemContainer}>
          <div className={classes.itemImg}>
            <img src={PlayerImage} alt={item.name} />
          </div>
          <div className={classes.itemInfo}>
            <h2>
              {item?.first_name} {item?.last_name}
            </h2>
            <ItemInfo item={item} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerPage;
