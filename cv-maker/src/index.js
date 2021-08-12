import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { AuthProvider } from "./components/contexts/AuthContext";
import Router from "./components/contexts/Routing";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <AuthProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </AuthProvider>,
  document.getElementById("root")
);
