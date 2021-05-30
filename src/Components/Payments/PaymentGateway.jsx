import React from "react";
import { Card, Col, Row } from "antd";

const PaymentGateway = () => {
  return (
    <div>
      <Row
        justify="center"
        align="middle"
        style={{ padding: "3rem 0", textAlign: "center" }}
      >
        <Col xs={23} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <Card title=" Payments Option">{/* White Code  */}</Card>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentGateway;
