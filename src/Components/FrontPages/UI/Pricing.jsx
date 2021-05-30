import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const Pricing = () => {
  return (
    <div>
      <div>
        <div style={{ paddingTop: "6rem", textAlign: "center" }}>
          <Title level={3} style={{ fontWeight: "700" }}>
            Pricing
          </Title>
        </div>
      </div>

      <Row
        justify="center"
        align="middle"
        style={{ padding: "3rem 0", textAlign: "center" }}
      >
        <Col xs={23} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <Card style={{ border: "0.1rem solid #ccc", margin: "0rem 1rem " }}>
            <div
              style={{
                padding: "2rem 0rem",

                color: "#fff",
              }}
            >
              <Title level={3}> Half Yearly</Title>
              <Paragraph> Pay Once learn 6 Month</Paragraph>
            </div>
            <div style={{ backgroundColor: "#FFF" }}>
              <Title level={4}>$175/Year</Title>
              <Paragraph> Pay annually</Paragraph>
              <Button type="primary" size="large" shape="round">
                <Link to="/Payments">
                  {" "}
                  Enroll now <ArrowRightOutlined />{" "}
                </Link>
              </Button>
              <div
                style={{
                  textAlign: "justify",
                  padding: "0rem 3rem",
                  color: "#000",
                  marginTop: "2rem ",
                  fontWeight: "500",
                }}
              >
                <ol>
                  <li> NO TRANSACTION FEES</li>
                  <li> ACCESS ALL RESOURCES - 6 MONTH</li>
                  <li> EXCELLENT COMMUNITY</li>
                  <li> AUTOMETIC UNSUBSCRIBE</li>
                </ol>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={23} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <Card style={{ border: "0.1rem solid #ccc", margin: "1rem 1rem " }}>
            <div
              style={{
                padding: "2rem 0rem",
                color: "#fff",
              }}
            >
              <Title level={3}> Yearly</Title>
              <Paragraph>Pay yearly and get 15% off</Paragraph>
            </div>
            <div style={{ backgroundColor: "#FFF" }}>
              <Title level={4}>$300/Year</Title>
              <Paragraph> Pay bi annually - Save $50</Paragraph>
              <Button type="primary" danger size="large" shape="round">
                <Link to="/Payments">
                  {" "}
                  Enroll now <ArrowRightOutlined />{" "}
                </Link>
              </Button>
              <div
                style={{
                  textAlign: "justify",
                  padding: "0rem 3rem",
                  color: "#000",
                  marginTop: "2rem ",
                  fontWeight: "500",
                }}
              >
                <ol>
                  <li> NO TRANSACTION FEES</li>
                  <li> ACCESS ALL RESOURCES - 6 MONTH</li>
                  <li> EXCELLENT COMMUNITY</li>
                  <li> AUTOMETIC UNSUBSCRIBE</li>
                </ol>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Pricing;
