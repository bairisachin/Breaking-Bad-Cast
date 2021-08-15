import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./component/Header";
import Card from "./component/Card";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardInfo from "./component/CardInfo";
import Paginate from "react-paginate";

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

  // get current cards
  // const indexOfLastCard = currentPage * cardsPerPage;
  // const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // const currentCards = items.slice(indexOfFirstCard, indexOfLastCard);
  // //to change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Pagination
  const [pageNumber, setPageNumber] = useState(0); //setting current page to 1st page (default)
  const cardsPerPage = 10;
  const pageVistied = pageNumber * cardsPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const pageCount = Math.ceil(items.length / cardsPerPage);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header getQuery={(q) => setQuery(q)} />
            <Card
              items={items.slice(pageVistied, pageVistied + cardsPerPage)}
              loading={loading}
            />
            <div className="paginate">
              <Paginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination-btns"}
                previousLinkClassName={"prev-btn"}
                nextLinkClassName={"next-btn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </div>
          </Route>
          <Route path={`/:id`} component={CardInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
