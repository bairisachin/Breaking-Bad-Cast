import { useState, useEffect } from "react";
import axios from "axios";
import "../css/CardInfo.css";
import logo from "../assets/Breaking_Bad_logo1.svg";
import { useHistory } from "react-router-dom";

function CardInfo({ match }) {
  const [item, setItem] = useState({});
  const [quotes, setQuotes] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchItem();
    fetchQuotes();
  }, []);

  const fetchItem = async () => {
    const character = await axios(
      `https://www.breakingbadapi.com/api/characters/${match.params.id}`
    );
    setItem(character.data[0]);
    console.log(item);
  };

  const fetchQuotes = async () => {
    const result = await fetch(
      `https://www.breakingbadapi.com/api/quotes/${match.params.id}`
    ).then((res) => res.json());
    setQuotes(result);
  };

  return (
    <div className="cardInfo">
      <div className="logo">
        <img
          className="logo__img"
          src={logo}
          alt=""
          onClick={() => history.push("./")}
        />
      </div>

      {quotes?.map(({ quote }) => (
        <p className="quote">"{quote}"</p>
      ))}
      <div className="cardInfo__hero">
        <img className="cardInfo__img" src={item.img} alt={item.name} />

        <section className="cardInfo__details">
          <p>
            <b>Name</b> : {item.name}{" "}
          </p>
          <br />
          <p>
            {" "}
            <b> Birthday </b>: {item.birthday}{" "}
          </p>
          <br />
          <p>
            {" "}
            <b> Occupation </b> : {item.occupation}
          </p>
          <br />
          <p>
            {" "}
            <b> Status </b>: {item.status}{" "}
          </p>
          <br />
          <p>
            {" "}
            <b> Nickname </b>: {item.nickname}{" "}
          </p>
          <br />
          <p>
            {" "}
            <b>Portrayed</b> : {item.portrayed}{" "}
          </p>
          <br />
          <p>
            {" "}
            <b> Appearance </b>: {item.appearance}
          </p>
        </section>
      </div>
    </div>
  );
}
export default CardInfo;
