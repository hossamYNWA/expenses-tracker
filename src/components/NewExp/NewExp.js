import FormCond from "./FormCond.js";
import "./NewExp.css";

export default function NewExp(props) {
  function newExpDataRaw(data) {
    props.onSaveNewExp0(data);
  }
  return (
    <div className="new-expense">
      <FormCond onSaveNewExp={newExpDataRaw} />
    </div>
  );
}
