import Header from "./Header";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <ul>
        {course.parts.map((lesson) => (
          <li key={lesson.id}>
            {lesson.name} - {lesson.exercises}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Course;
