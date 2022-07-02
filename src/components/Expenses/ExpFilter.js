import React from "react";

import "./ExpFilter.css";

const ExpFilter = (props) => {
  const pickYear = (e) => {
    props.onSelectYear(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={pickYear}>
          <option value="2022" defaultValue>
            2022
          </option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpFilter;
