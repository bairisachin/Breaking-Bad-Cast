import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./component/Header";
import Card from "./component/Card";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1); //setting current page to 1st page (default)
  const [cardsPerPage] = useState(10); //no.of cards per page

  //Fetching The data
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setLoading(false);
    };

    fetchItems();
  }, [query]);

  //get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = items.slice(indexOfFirstCard, indexOfLastCard);

  // console.log(currentCards);

  //to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="app">
      <Header getQuery={(q) => setQuery(q)} />
      <Card
        items={currentCards}
        loading={loading}
        totalCards={items.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
