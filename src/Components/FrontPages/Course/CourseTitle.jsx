import { Typography } from "antd";
import React from "react";

const { Title } = Typography;
const CourseTitle = () => {
  return (
    <div style={{ backgroundColor: "rgb(33 44 65)" }}>
      <div style={{ padding: "6rem 0", textAlign: "center" }}>
        <Title level={3} style={{ color: "#fff" }}>
          Our Course
        </Title>
      </div>
    </div>
  );
};

export default CourseTitle;
