import React, { Component } from "react";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";
import courseList from "../courseList";

class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: {},
    currentStudent: {}
  };

  render() {
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {/* Course Title Here */}
          Course Title
        </div>

        <CourseSelector />

        {/* Edit Form */}
        <form
          className="ui form center aligned sixteen wide column"
          onSubmit={""}
        >
          <div className="inline fields">
            <div className="four wide field">
              <input
                id="name"
                type="text"
                value={""}
                onChange={"your code here"}
              />
            </div>
            <div className="four wide field">
              <input
                id="class_year"
                type="number"
                value={""}
                onChange={"your code here"}
              />
            </div>
            <div className="four wide field">
              <input
                id="percentage"
                type="number"
                value={""}
                onChange={"your code here"}
              />
            </div>
            <button className="ui button" type="submit">
              Submit
            </button>
          </div>
        </form>

        <StudentsList />
      </div>
    );
  }
}

export default CourseContainer;
