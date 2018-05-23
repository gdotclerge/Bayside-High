import React from "react";
import courseList from "../courseList";

const CourseSelector = () => {
  return (
    <div className="sixteen wide column">
      <select className="ui dropdown">
        {courseList.map((course, i) => {
          return (
            <option key={i} className="item" data-value={course.id}>
              {course.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CourseSelector;
