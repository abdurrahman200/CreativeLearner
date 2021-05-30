import { Typography } from "antd";
import React from "react";
const { Title } = Typography;

const AboutTitle = () => {
  return (
    <div>
      <div style={{ paddingTop: "6rem", textAlign: "center" }}>
        <Title level={3} style={{ fontWeight: "700" }}>
          About <span style={{ color: "#ff4d4f" }}> Creative </span> Learners
        </Title>
      </div>
    </div>
  );
};

export default AboutTitle;
