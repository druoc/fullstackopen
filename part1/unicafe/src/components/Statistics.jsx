import Header from "./Header";

const Statistics = (props) => {
  if (props.total === 0) {
    return <div></div>;
  }
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
