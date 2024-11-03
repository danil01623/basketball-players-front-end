import DataListItem from "./DataListItem";
import { Player } from "../Models/player.model";

interface DataListInterface {
  items: Player[];
}
const DataList = (props: DataListInterface) => {
  const { items } = props;

  return (
    <div className="list">
      {items?.length ? (
        <div className="list-item-container">
          {items.map((item: Player) => (
            <DataListItem key={item?.id} player={item} />
          ))}
        </div>
      ) : (
        <h2 style={{ color: "white" }}>No data available</h2>
      )}
    </div>
  );
};

export default DataList;
