import React from "react";
import { Link } from "react-router-dom";

const Search = ({ onInputChange, field }) => {
  return (
    <div className="input-container">
      <input
        placeholder="Search for your dream job"
        onChange={e => onInputChange(e)}
      />
      <Link to={`/paths/${field}`}>
        <button>Submit</button>
      </Link>
    </div>
  );
};

export default Search;
