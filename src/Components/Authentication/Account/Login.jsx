import React from "react";
import { Form, Input, Button, Card, Col, Row, Typography } from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined , MinusOutlined} from "@ant-design/icons";
import login from "../../../Assets/images/login.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../Auth/useAuth";

const { Title } = Typography;
const Login = () => {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const onFinish = (values) => {
    handleSignIn(values.email, values.password);
  };

  const handleSignIn = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then((res) => {
      console.log(res);
      history.replace(from);
    });
  };
  const handleGoogleSignIn = () => {
    auth.signInWithGoogle().then((res) => {
      console.log(res);
      history.replace(from);
    });
  };
  return (
    <div>
      <Row justify="center" align="middle" style={{ padding: "10rem 0" }}>
        <Col xs={22} sm={23} md={12} lg={12} xl={8} xxl={6}>
          <Card cover={<img alt="example" src={login} />}></Card>
        </Col>
        <Col xs={23} sm={23} md={12} lg={12} xl={8} xxl={6} offset={1}>
          <div style={{ textAlign: "center" }}>
            <Title level={4}> Login or Register to Start Learning </Title>
            <Button type="primary" onClick={handleGoogleSignIn}>
              <GoogleOutlined /> Google
            </Button>

            <Title level={4} style={{marginTop:'2rem'}}> <MinusOutlined />  OR  <MinusOutlined /></Title>
          </div>
          <Card>
            <Form
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                label="What's your e-mail?"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined />}
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
                  Login
                </Button>

                <Form.Item>
                  Don't Have A Account ?<Link to="/register"> Register </Link>
                </Form.Item>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
