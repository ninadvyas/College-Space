import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";
import Index from "views/Index.js";
import Material from "views/examples/Material.js";
import Contact from "views/examples/Contact.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Computer from "views/examples/Computer.js";
import Science from "views/examples/Science.js";
import Information from "views/examples/Infromation.js";
import Project from "views/examples/Project.js";
import Docs from "views/examples/Docs.js";
import Sem4 from "views/Smester/Sem4";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route
        path="/Sem4"
        render={(props) => <Sem4 {...props} />}
      />
       <Route
        path="/Project"
        render={(props) => <Project {...props} />}
      />
      <Route
        path="/Docs"
        render={(props) => <Docs {...props} />}
      />
      <Route
        path="/Information"
        render={(props) => <Information {...props} />}
      />
      <Route
        path="/Science"
        render={(props) => <Science {...props} />}
      />
      <Route
        path="/Computer"
        render={(props) => <Computer {...props} />}
      />
      <Route
        path="/Material"
        render={(props) => <Material {...props} />}
      />
       <Route
        path="/Contact"
        render={(props) => <Contact {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      
      <Redirect from="/" to="/components" />
    </Switch>
    <ToastContainer/>
  </BrowserRouter>
);
