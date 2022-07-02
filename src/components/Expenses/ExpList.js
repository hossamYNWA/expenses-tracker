import ExpenseItem from "./ExpenseItem.js";

export default function ExpList(props) {
  if (props.filteredItems.length === 0) {
    return <h2>nothing recorded in that year </h2>;
  } else {
    return (
      <ul>
        {props.filteredItems.map((item) => (
          <ExpenseItem
            key={item.key}
            name={item.name}
            value={item.value}
            date={item.date}
          />
        ))}
      </ul>
    );
  }
}
