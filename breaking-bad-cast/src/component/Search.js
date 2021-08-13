import "../css/Search.css";
import { useState } from "react";

function Search({ getQuery }) {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Search Characters"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        autoFocus
      />
    </div>
  );
}

export default Search;
