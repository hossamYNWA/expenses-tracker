import Chart from "../Chart/Chart";
export default function DataPoints(props) {
  const months = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jun", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 }
  ];
  for (let item of props.fitems) {
    const month = item.date.getMonth();
    months[month].value += item.value;
  }
  return <Chart DataPoints={months} />;
}
