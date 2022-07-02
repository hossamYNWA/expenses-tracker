import ExpList from "./ExpList.js";
import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card.js";
import ExpFilter from "./ExpFilter";
import DataPoints from "./DataPoints";

export default function Expenses(props) {
  const exItems = props.exItems;
  const [filterYear, setFilterYear] = useState("2020");
  const makeFilter = (year) => {
    setFilterYear(year);
  };
  const filteredExpenses = exItems.filter(
    (item) => item.date.getFullYear().toString() === filterYear
  );
  return (
    <div>
      <ExpFilter onSelectYear={makeFilter} />
      <DataPoints fitems={filteredExpenses} />
      <Card className="exp">
        <ExpList filteredItems={filteredExpenses} />
      </Card>
    </div>
  );
}
