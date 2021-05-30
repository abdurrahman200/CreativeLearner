import React, { useEffect, useState } from "react";
import { Card, Col, Row, Typography } from "antd";

import UpcomingResourcesData from "../../../Assets/data/UpcomingResourcesData.json";

const { Title, Paragraph } = Typography;

const Resources = () => {
  const [UpcomingResources, setUpcomingResources] = useState(
    UpcomingResourcesData
  );

  useEffect(() => {
    setUpcomingResources(UpcomingResources);
  }, [UpcomingResources]);

  return (
    <div
      style={{
        padding: "8rem 2rem",
        fontWeight: "bolder",
        backgroundColor: "rgb(20 41 90)",
        color: "#FFF",
        textAlign: "center",
      }}
    >
      <div>
        <Title style={{ fontWeight: "700", color: "#FFF" }}>
          Upcoming Resources
        </Title>

        <Paragraph style={{ fontWeight: "600", color: "#FFF" }}>
          Based on SAAS Applications, Server-less Technologies, AWS Cloud &
          Workflow Automation
        </Paragraph>
      </div>

      <Row justify="center" align="middle">
        {UpcomingResources.length === 0 && <h2>No Any Upcoming Resources </h2>}
        {UpcomingResources.map((UpcomingResource) => (
          <Col xs={23} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <Card
              style={{
                margin: "1rem",
                backgroundColor: "transparent",
                height: "25rem",
               
              }}
            >
              <img
                alt={UpcomingResource.name}
                src={UpcomingResource.image}
                width="100"
              />

              <Title style={{ color: "#FFF", marginTop: "2rem" }} level={5}>
                {UpcomingResource.name}{" "}
              </Title>
              <Paragraph style={{ color: "#FFF" }} level={5}>
                {UpcomingResource.title}{" "}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Resources;
