import Header from "./Header";

const Feedback = (props) => {
  return (
    <div>
      <Header headerText={"Give feedback"} />
      <button onClick={props.handleGoodClick}>Good</button>
      <button onClick={props.handleNeutralClick}>Neutral</button>
      <button onClick={props.handleBadClick}>Bad</button>
    </div>
  );
};

export default Feedback;
