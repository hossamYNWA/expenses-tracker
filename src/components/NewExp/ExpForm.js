import "./ExpForm.css";
import { useState } from "react";
export default function ExpForm(props) {
  const [addedName, setName] = useState(""),
    [addedDate, setDate] = useState(""),
    [addedValue, setValue] = useState("");
  const nameChange = (e) => setName(e.target.value);
  const dateChange = (e) => setDate(e.target.value);
  const valueChange = (e) => setValue(e.target.value);

  function dataHandler(e) {
    e.preventDefault();
    const newExpenses = {
      name: addedName,
      value: +addedValue,
      date: new Date(addedDate)
    };
    props.onSaveForm(newExpenses);
    setName("");
    setValue("");
    setDate("");
  }

  return (
    <form onSubmit={dataHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input type="text" value={addedName} onChange={nameChange} />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            value={addedDate}
            type="date"
            min="2019-01-01"
            max="2022-01-01"
            onChange={dateChange}
          />
        </div>
        <div className="new-expense__control">
          <label>value</label>
          <input
            type="number"
            value={addedValue}
            min="0.01"
            step="0.01"
            onChange={valueChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>cancel</button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
