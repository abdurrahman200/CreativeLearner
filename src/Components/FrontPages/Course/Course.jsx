import { Button, Card, Col, Row } from "antd";
import React from "react";
import ReactPlayer from "react-player";

const Course = () => {
  return (
    <Row justify="center" align="middle">
      <Col xs={23} sm={23} md={12} lg={12} xl={12} xxl={12}>
        <Card>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=uIBLzeuC1rk"
            controls={true}
            width="100"
          />
          <Button
            type="primary"
            size="large"
            block
            style={{ margin: "2rem 0" }}
          >
            {" "}
            Let's Start{" "}
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Course;
