import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, id) => (
        <Part key={id} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

export default Content;
