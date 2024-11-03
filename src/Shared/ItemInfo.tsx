import { Player } from "../Models/player.model";

const ItemInfo: React.FC<{ item: Player }> = (props) => {
  const { item } = props;

  return (
    <div className="information">
      <ul>
        <li>Team: {item.team}</li>
        <li>Position: {item.position}</li>
        <li>Nationality: {item.nationality}</li>
        <li>Jersy Number: {item.jersey_number}</li>
      </ul>
    </div>
  );
};

export default ItemInfo;
