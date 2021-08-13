import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./component/Header";
import Card from "./component/Card";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

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

  return (
    <div className="app">
      <Header getQuery={(q) => setQuery(q)} />
      <Card items={items} loading={loading} />
    </div>
  );
}

export default App;
