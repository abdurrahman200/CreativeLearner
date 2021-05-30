import { Row } from "antd";
import React, { useEffect, useState } from "react";
import CourseData from "../../../Assets/data/CourseData.json";
import Item from "./Item";

const Items = () => {
  const [Courses, setCourses] = useState(CourseData);

  useEffect(() => {
    setCourses(Courses);
  }, [Courses]);

  return (
    <Row justify="center" align="middle">
      {Courses.length === 0 && <h2>No Data</h2>}
      {Courses.map((course) => (
        <Item course={course} key={course.id} />
      ))}
    </Row>
  );
};

export default Items;
