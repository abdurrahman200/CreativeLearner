import { BackTop, Button, Typography } from "antd";
import { Footer } from "antd/lib/layout/layout";
import { LinkedinOutlined, YoutubeOutlined } from "@ant-design/icons";
import React from "react";

const { Title } = Typography;

const Footers = () => {
  return (
    <>
      <Footer style={{ backgroundColor: "rgb(11 31 69)", textAlign: "center" }}>
        <div style={{ paddingTop: "5rem", textAlign: "center", color: "#fff" }}>
          <Title level={3} style={{ color: "#FFF" }}>
            Follow <span style={{ color: "#ff4d4f" }}> Creative </span> Learner
          </Title>
          <Title
            level={5}
            style={{ textTransform: "uppercase", color: "#FFF" }}
          >
            "Tough times never last, but tough people do."
          </Title>
        </div>

        <Button.Group>
          <a
            href="https://www.linkedin.com/in/abdurrahmanakaid/"
            target="_blank"
            rel="noreferrer"
          >
            <Button type="primary" ghost>
              {" "}
              <LinkedinOutlined />
              Linked in{" "}
            </Button>
          </a>
          <a
            href="https://www.youtube.com/channel/UCf1HSxl_-1MJjxcjHBLsF7Q"
            target="_blank"
            rel="noreferrer"
          >
            <Button type="primary" ghost  style={{ margin: "0 1rem" }}>
              {" "}
              <YoutubeOutlined /> You tube{" "}
            </Button>
          </a>
        </Button.Group>
      </Footer>
      <Footer
        style={{
          backgroundColor: "#000",
          color: "#FFF",
          padding: "1rem 0",
          textAlign: "center",
        }}
      >
        &copy; Copyright Creative Learner Premium Courses 2021
      </Footer>
      <BackTop />
    </>
  );
};

export default Footers;
