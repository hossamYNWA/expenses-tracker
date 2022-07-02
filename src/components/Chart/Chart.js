import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const bars = props.DataPoints;
  const values = bars.map((bar) => bar.value);
  const maxVal = Math.max(...values);
  return (
    <div className="chart">
      {bars.map((point) => (
        <ChartBar
          key={point.month}
          label={point.month}
          value={point.value}
          max={maxVal}
        />
      ))}
    </div>
  );
};

export default Chart;
