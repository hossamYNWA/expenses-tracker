import "./ChartBar.css";

export default function ChartBar(props) {
  let barfillht = "0%";
  if (props.max > 0) {
    barfillht = Math.round((props.value / props.max) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barfillht }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
      <div className="chart-bar__label">{props.value}</div>
    </div>
  );
}
