import { Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const Items = () => {
  const courses = useSelector((state) => {
    return state.siteState.courseList;
  })

  // useEffect(() => {
  //   setCourses(Courses);
  // }, [Courses]);
console.log(courses);
  return (
    <Row justify="center" align="middle">
      {courses.length === 0 && <h2>No Data</h2>}
      {
      courses.map((course) => (
        <Item course={course} key={course.id} />
      ))
      }
    </Row>
  );
};

export default Items;
