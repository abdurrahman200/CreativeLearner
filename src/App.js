import React, { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Authentication/Account/Login";
import Register from "./Components/Authentication/Account/Register";
import Footers from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import NotFound from "./Components/Common/NotFound";
import index from "./Components/FrontPages/UI/index";
import Layout from "antd/lib/layout/layout";
import Payments from "./Components/Payments/Payments";
import Auth, {
  AuthContextProvider,
} from "./Components/Authentication/Auth/useAuth";

import loading from "./Assets/images/loading-app-animation.gif";
import About from "./Components/FrontPages/About/About";
import Success from "./Components/FrontPages/Success/Success";

export const UserContext = createContext();

function App() {
  const auth = Auth();
  return auth.user === undefined || auth.user ? (
    <AuthContextProvider>
      <Layout>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={index} />
            <Route  path="/About" component={About} />
            <Route  path="/Success" component={Success} />
            <Route path="/Payments" component={Payments} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="*" component={NotFound} />
          </Switch>

          <Footers />
        </Router>
      </Layout>
    </AuthContextProvider>
  ) : (
    <div style={{ textAlign: "center" }}>
      <img src={loading} alt="loading" />
    </div>
  );
}

export default App;
