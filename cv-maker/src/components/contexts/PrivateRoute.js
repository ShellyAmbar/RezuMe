import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function PrivateRoutes({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          return currentUser ? <Component {...props} /> : <Redirect to="/" />;
        }}
      ></Route>
    </div>
  );
}
