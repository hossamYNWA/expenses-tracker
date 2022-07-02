import "./ExpDate.css";
import Card from "../UI/Card";

export default function ExpDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" }),
    year = props.date.getFullYear();
  return (
    <Card className="dateBox">
      <p className="month">{month}</p>
      <p className="year">{year}</p>
    </Card>
  );
}
