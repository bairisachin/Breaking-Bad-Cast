import "../css/CharacterItem.css";

function CharacterItem({ item }) {
  console.log(item.char_id);
  return (
    <div className="card">
      <img className="card__img" src={item.img} alt="#" />
      <h1 className="card__name">{item.name}</h1>
    </div>
  );
}

export default CharacterItem;
