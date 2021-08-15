import "../css/Card.css";
import CharacterItem from "./CharacterItem";
import Pagination from "./Pagination";

function Card({ items, loading, totalCards, paginate }) {
  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <div className="cards">
        {items?.map((item) => (
          <CharacterItem key={item.char_id} item={item} />
        ))}
      </div>

      <div className="pagenumber">
        <Pagination
          cardPerPage={items.length}
          totalCards={totalCards}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Card;
