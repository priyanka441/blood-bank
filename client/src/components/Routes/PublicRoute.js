import React from "react";
import { Navigate } from "react-router-dom";
//agr hmare pass token hai (mtlb humne login/register krlia hai) to  hum wapis lgin kyu jayenge we'll stay at homepage only so that is the reason why login and register are public 
const PublicRoute = ({ children }) => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/home" />;
  } else {
    return children;
  }
};

export default PublicRoute;