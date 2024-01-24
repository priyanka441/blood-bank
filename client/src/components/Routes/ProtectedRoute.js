import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import API from "../../services/API";
import { getCurrentUser } from "../../redux/features/auth/authActions";
import { Navigate } from "react-router-dom";
//homepage is protected bcz jb hume token milega then only we can go to homepage else no
const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();

  //get user current
  const getUser = async () => {
    try {
      const { data } = await API.get("/auth/current-user");
      if (data?.success) {
        dispatch(getCurrentUser(data));
      }
    } catch (error) {
      localStorage.clear(); //koi bhi token nhi chahiye,token delete
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();  //initial tym p call,state fulfill
  });

  if (localStorage.getItem("token")) {
    return children;     //current user miljayeggaa
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;