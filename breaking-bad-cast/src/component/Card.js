import "../css/Card.css";
import CharacterItem from "./CharacterItem";

function Card({ items, loading }) {
  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <div className="cards">
        {items?.map((item) => (
          <CharacterItem key={item.char_id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Card;
