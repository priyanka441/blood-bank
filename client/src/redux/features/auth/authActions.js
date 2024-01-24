// import { createAsyncThunk } from "@reduxjs/toolkit";
// import API from "../../../services/API";
// import { toast } from "react-toastify";
// import { useHistory } from 'react-router-dom';

// export const userLogin = createAsyncThunk(
//   "auth/login", //action ka naam
//   async ({ role, email, password }, { rejectWithValue }) => {  //error case will be handled by rejectWithValue
//     try {
//       const { data } = await API.post("/auth/login", { role, email, password });
//       //store token
//       if (data.success) {
//         alert(data.message);
//         localStorage.setItem("token", data.token);
//         // toast.success(data.message)
//         window.location.replace("/");
//       }
//       return data;
//     } catch (error) {
//       if (error.response && error.response.data.message) {  //custom error handled
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// //register
// export const userRegister = createAsyncThunk(
//   "auth/register",
//   async (
//     {
//       name,
//       role,
//       email,
//       password,
//       phone,
//       organisationName,
//       address,
//       hospitalName,
//       website,
//     },
//     { rejectWithValue }
//   ) => {
//     try {
//       const { data } = await API.post("/auth/register", {
//         name,
//         role,
//         email,
//         password,
//         phone,
//         organisationName,
//         address,
//         hospitalName,
//         website,
//       });
//       if (data.success) {
//         alert("User Registerd Successfully");
//         // toast.success(data.message)
//         window.location.replace("/login");
        
//       }
//     } catch (error) {
//       console.log(error);
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// //current user
// export const getCurrentUser = createAsyncThunk(
//   "auth/getCurrentUser",
//   async ({ rejectWithValue }) => {
//     try {
//       const res = await API.get("/auth/current-user");
//       if (res?.data) {
//         return res?.data; //this means res && res.data and check if true or false
//       }
//     } catch (error) {
//       console.log(error);
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      //store token
      if (data.success) {
        alert(data.message);
        localStorage.setItem("token", data.token);
        window.location.replace("/home");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      });
      if (data?.success) {
        alert("User Registerd Successfully");
        window.location.replace("/login");
        // toast.success("User Registerd Successfully");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//current user
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");
      if (res.data) {
        return res?.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);