import Button from "./Button";
import Header from "./Header";

const Feedback = (props) => {
  return (
    <div>
      <Header headerText={"Give feedback"} />
      <Button handleClick={props.handleGoodClick} buttonText="Good" />
      <Button handleClick={props.handleNeutralClick} buttonText="Neutral" />
      <Button handleClick={props.handleBadClick} buttonText="Bad" />
    </div>
  );
};

export default Feedback;
