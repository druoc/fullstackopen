import Header from "./Header";
import Part from "./Part";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <ul>
        {course.parts.map((lesson) => (
          <Part key={lesson.id} course={lesson} />
        ))}
      </ul>
    </div>
  );
};

export default Course;
