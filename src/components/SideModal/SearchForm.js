import React from "react";

const SearchForm = () => (
  <form className="mb-4">
    <div className="input-group input-group-merge">
      <input
        type="search"
        className="form-control form-control-prepended search"
        placeholder="Search Altcoins..."
      />
      <div className="input-group-prepend">
        <div className="input-group-text">
          <span className="fe fe-search" />
        </div>
      </div>
    </div>
  </form>
);

export default SearchForm;
