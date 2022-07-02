import "./Card.css";

export default function Card(props) {
  const classx = props.className + " card";
  return <div className={classx}>{props.children}</div>;
}
