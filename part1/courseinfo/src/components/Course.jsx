import Header from "./Header";
import Part from "./Part";
import Total from "./Total";

const Course = ({ course, total }) => {
  return (
    <div>
      <Header course={course.name} />
      <ul>
        {course.parts.map((lesson) => (
          <Part key={lesson.id} course={lesson} />
        ))}
      </ul>
      <Total total={total} />
    </div>
  );
};

export default Course;
