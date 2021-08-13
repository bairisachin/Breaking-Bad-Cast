import "../css/Card.css";
import CharacterItem from "./CharacterItem";

function Card({ items }) {
  return (
    <div className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </div>
  );
}

export default Card;
