import "../css/CharacterItem.css";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function CharacterItem({ item }) {
  // const history = useHistory();

  return (
    <Link to={`./${item.char_id}`}>
      <div className="card">
        <img className="card__img" src={item.img} alt={item.name} />
        <h1 className="card__name">{item.name}</h1>
      </div>
    </Link>
  );
}

export default CharacterItem;
