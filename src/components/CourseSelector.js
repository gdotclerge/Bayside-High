import React from "react";



const CourseSelector = (props) => {
  const renderCourses = () => {
   return props.courses.map( (course) => {
     return (
       <div className="sixteen wide column">
         <select className="ui dropdown">
           <option key={course.name} className="item" data-value={course.id}>
             {course.name}
           </option>
         </select>
       </div>
   )}
 )
 }
}

export default CourseSelector
