import { Button, Col, Row, Typography } from "antd";
import React from "react";
import { ArrowRightOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title } = Typography;

const HeroSection = () => {
  return (
    <div className="hero">
      <Row align="middle" style={{ height: "90vh" }}>
        <Col xs={20} sm={20} md={8} lg={8} xl={8} xxl={8} offset={3}>
          <Title style={{ fontWeight: "700" }}>
            Pay Once And <br /> Learn Full-Year!{" "}
          </Title>
          <Title level={4}>
            Level up your skill with tons of great lessons that can help you
            grow 5x faster with our guidance. You can learn specific technology
            with our world-class courses.
          </Title>
          <Button type="primary" shape="round" danger size="large">
            <Link to="/Payments">
              {" "}
              <ShoppingCartOutlined /> Enroll now <ArrowRightOutlined />{" "}
            </Link>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
