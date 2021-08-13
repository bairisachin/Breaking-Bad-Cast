import "../css/CharacterItem.css";

function CharacterItem({ item }) {
  return (
    <div className="card">
      <img className="card__img" src={item.img} alt={item.name} onClick="" />
      <h1 className="card__name">{item.name}</h1>
    </div>
  );
}

export default CharacterItem;
