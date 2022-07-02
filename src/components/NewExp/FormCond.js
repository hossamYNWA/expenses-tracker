import "./ExpForm.css";
import ExpForm from "./ExpForm";
import { useState } from "react";

export default function FormCond(props) {
  const [addInput, setAddInput] = useState(false);
  function addedNew(addedEx) {
    const newData = {
      ...addedEx,
      key: Math.random().toString()
    };
    props.onSaveNewExp(newData);
  }
  function changeAddInputT() {
    setAddInput(true);
  }
  function changeAddInputF() {
    setAddInput(false);
  }

  if (addInput) {
    return <ExpForm onSaveForm={addedNew} onCancel={changeAddInputF} />;
  } else {
    return <button onClick={changeAddInputT}>Add New Expense </button>;
  }
}
