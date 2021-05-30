import { Card, Col, Row } from "antd";
import React from "react";
import ReactPlayer from "react-player";

const Course = () => {
  return (
    <Row justify="center" align="middle">
      <Col xs={20} sm={20} md={12} lg={12} xl={12} xxl={12}>
        <Card>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=uIBLzeuC1rk"
            controls={true}
            
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Course;
