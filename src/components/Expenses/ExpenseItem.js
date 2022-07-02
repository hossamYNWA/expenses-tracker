import "./ExpenseItem.css";
import ExpDate from "./ExpDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const name = props.name,
    value = props.value;
  return (
    <Card className="item">
      <div className="date">
        <ExpDate date={props.date} />
      </div>
      <div className="title">{name}</div>
      <div className="value">{value}</div>
    </Card>
  );
}

export default ExpenseItem;
