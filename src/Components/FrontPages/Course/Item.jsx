import React from "react";
import { Col } from "antd";
import { Link } from "react-router-dom";

const Item = ({ course }) => {
  const { name } = course;
  return (
    <>
      <Col xs={23} sm={23} md={23} lg={23} xl={23} xxl={23}>
        <Link to="/">{name}</Link>
      </Col>
    </>
  );
};

export default Item;
