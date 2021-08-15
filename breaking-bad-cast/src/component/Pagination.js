import "../css/Pagination.css";

function Pagination({ cardPerPage, totalCards, paginate }) {
  //creating a empty list to store page numbers;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
    // 72 / 10 = 7
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers?.map((number) => (
          <li key={number} className="pagination__numbers">
            <a
              onClick={() => paginate(number)}
              href="#"
              className="pagination__link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
