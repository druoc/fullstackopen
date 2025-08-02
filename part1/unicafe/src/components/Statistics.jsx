import Header from "./Header";
import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  if (props.total === 0) {
    return <div></div>;
  }
  return (
    <div>
      <Header headerText={"Statistics"} />
      <StatisticLine text="Good" value={props.good} />
      <StatisticLine text="Neutral" value={props.neutral} />
      <StatisticLine text="Bad" value={props.bad} />
      <StatisticLine text="Total" value={props.total} />
      <StatisticLine text="Average" value={props.average} />
      <StatisticLine text="Positive" value={`${props.positive}%`} />
    </div>
  );
};

export default Statistics;
