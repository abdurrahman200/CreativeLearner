import { Button, Card, Col, Row, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useEffect, useState } from "react";
import successData from "../../../Assets/data/successData.json";

const { Title } = Typography;

const SuccessAll = () => {
  const [successes, setSuccessAll] = useState(successData);

  console.log(successes);

  useEffect(() => {
    setSuccessAll(successes);
  }, [successes]);

  return (
    <>
      <Row justify="center" align="middle">
        {successes.length === 0 && <h3> Not Any Data </h3>}

        {successes.map((success) => (
          <Col xs={23} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <Card
              cover={<img alt={success.name} src={success.image} />}
              style={{
                margin: "2rem",
                height: "100%",
              }}
            >
              <Title level={4}> {success.name}</Title>
              <Meta
                title={success.title}
                description={success.description}
                style={{ margin: "1rem 0" }}
              />
              <Button type="primary" block danger>
                Batch : {success.batch}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SuccessAll;
