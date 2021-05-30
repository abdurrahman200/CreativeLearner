import { Typography } from "antd";
import React from "react";
const { Title } = Typography;

const SuccessTitle = () => {
  return (
    <div>
      <div style={{ paddingTop: "6rem", textAlign: "center" }}>
        <Title level={3} style={{ fontWeight: "700" }}>
          Successful <span style={{ color: "#ff4d4f" }}> Student </span>{" "}
          Learners
        </Title>
      </div>
    </div>
  );
};

export default SuccessTitle;
