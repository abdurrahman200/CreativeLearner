import React from "react";
import { Statistic, Row, Col } from "antd";

const CounterSection = () => {
  return (
    <div
      style={{
        padding: "8rem 2rem",
        textAlign: "center",
        fontWeight: "bolder",
        backgroundColor: "#EEE",
      }}
    >
      <Row justify="center" align="middle">
        <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4}>
          <Statistic title="Video Tutorials" value={"550+"} />
        </Col>

        <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4}>
          <Statistic title="Quizes" value={"200+"} precision={2} />
        </Col>

        <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4}>
          <Statistic title="Assignment OR Project " value={"15+"} />
        </Col>

        <Col xs={24} sm={12} md={12} lg={4} xl={4} xxl={4}>
          <Statistic title="Enrolled Students" value={"3K+"} />
        </Col>
      </Row>
    </div>
  );
};

export default CounterSection;
