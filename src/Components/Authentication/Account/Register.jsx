import React from "react";
import { Form, Input, Button, Card, Col, Row, Typography } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import register from "../../../Assets/images/register.svg";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../Auth/useAuth";

const { Title } = Typography;

const Register = () => {
  const auth = useAuth();

  const onFinish = (values) => {
    if (
      values.username &&
      values.email &&
      values.password &&
      values.confirmPassword
    ) {
      const registerStatus = auth.register(
        values.username,
        values.email,
        values.password
      );
      if (registerStatus === true) {
        console.log("success");
        Redirect("/");
      }
    }
  };
  return (
    <div>
      <Row justify="center" align="middle" style={{ padding: "10rem 0" }}>
        <Col xs={22} sm={23} md={12} lg={12} xl={8} xxl={6}>
          <Card cover={<img alt="example" src={register} />}></Card>
        </Col>
        <Col xs={23} sm={23} md={12} lg={12} xl={8} xxl={6} offset={1}>
          <div style={{ textAlign: "center" }}>
            <Title level={4}> Register to Creative Learner! </Title>
            <Title level={4} style={{ marginTop: "2rem" }}>
              {" "}
              <MinusOutlined /> OR <MinusOutlined />
            </Title>
          </div>

          <Card>
            <Form
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="name"
                label="What's your name?"
                rules={[{ required: true, message: "Please input your Name!" }]}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="Name "
                />
              </Form.Item>

              <Form.Item
                name="email"
                label="What's your Email?"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  size="large"
                  prefix={<MailOutlined />}
                  placeholder="Email "
                />
              </Form.Item>

              <Form.Item
                label="Your password?"
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  size="large"
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  size="large"
                  danger
                  htmlType="submit"
                  block
                >
                  Register
                </Button>

                <Form.Item>
                  Have A Account ?<Link to="/login"> Login </Link>
                </Form.Item>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
