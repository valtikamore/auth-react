import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/roboto";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
