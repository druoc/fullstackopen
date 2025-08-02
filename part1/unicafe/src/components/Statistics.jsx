import Header from "./Header";

const Statistics = (props) => {
  return (
    <div>
      <Header headerText={"Statistics"} />
      <p>Good - {props.good}</p>
      <p>Neutral - {props.neutral}</p>
      <p>Bad - {props.bad}</p>
      <p>Total - {props.total}</p>
      <p>Average - {props.average}</p>
      <p>Positive - {props.positive}%</p>
    </div>
  );
};

export default Statistics;
