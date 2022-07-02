import "./styles.css";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExp from "./components/NewExp/NewExp";

const Dummy = [
  {
    key: Math.random().toString(),
    name: "car",
    value: 1019,
    date: new Date(2019, 11, 1)
  },
  {
    key: Math.random().toString(),
    name: "rent",
    value: 6000,
    date: new Date(2021, 4, 2)
  },
  {
    key: Math.random().toString(),
    name: "school",
    value: 700,
    date: new Date(2020, 9, 28)
  },
  {
    key: Math.random().toString(),
    name: "mobile",
    value: 78,
    date: new Date(2020, 11, 26)
  },
  {
    key: Math.random().toString(),
    name: "sports",
    value: 78,
    date: new Date(2022, 7, 26)
  }
];

export default function App() {
  const [expItems, setNewExp] = useState(Dummy);
  function newExpense(data) {
    setNewExp((expItems) => [data, ...expItems]);
  }
  return (
    <div className="App">
      <NewExp onSaveNewExp0={newExpense} />
      <Expenses className="exp" exItems={expItems} />
    </div>
  );
}
