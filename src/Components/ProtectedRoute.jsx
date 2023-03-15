import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  let location = useLocation();

  if (!user.id) {
    return (
      <Navigate
        to={{ pathname: "/login", state: { from: location } }}
        replace
      />
    );
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
}

export default ProtectedRoute;
