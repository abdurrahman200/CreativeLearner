import React from "react";
import { Button, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";
import { useAuth } from "../Authentication/Auth/useAuth";
import { ShoppingCartOutlined, LogoutOutlined } from "@ant-design/icons";

const Navbar = () => {
  const auth = useAuth();
  console.log(auth);
  const handleSignOut = () => {
    auth.signOut().then((res) => {
      window.location.pathname = "/";
    });
  };
  return (
    <Header>
      <Link to="/" style={{ fontSize: "2rem", fontWeight: "500" }}>
        <span style={{ color: "#ff4d4f" }}> Creative </span> Learner
      </Link>
      <Menu theme="dark" mode="horizontal" style={{ float: "right" }}>
        <Button type="primary" ghost style={{ margin: "0 1rem" }}>
          <Link to="/About"> About </Link>
        </Button>
        <Button type="primary" ghost style={{ margin: "0 1rem" }}>
          <Link to="/Success"> Success </Link>
        </Button>
        {auth.user ? (
          <Button type="primary" ghost style={{ margin: "0 1rem" }}>
            <Link to="/Course"> My Course</Link>
          </Button>
        ) : (
          <Button type="primary" ghost style={{ margin: "0 1rem" }}>
            <Link to="/Payments">
              <ShoppingCartOutlined /> Enroll
            </Link>
          </Button>
        )}

        {auth.user ? (
          <Button type="primary" ghost danger style={{ margin: "0 1rem" }}>
            <Link to="/Login" onClick={handleSignOut}>
              <LogoutOutlined /> Logout
            </Link>
          </Button>
        ) : (
          <Button type="primary" ghost style={{ margin: "0 1rem" }}>
            <Link to="/Login"> Join </Link>
          </Button>
        )}
      </Menu>
    </Header>
  );
};

export default Navbar;
