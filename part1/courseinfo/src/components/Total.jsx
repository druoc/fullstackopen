const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <strong>
        <p>Number of exercises: {total}</p>
      </strong>
    </>
  );
};

export default Total;
