import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import Donar from "./pages/Dashboard/Donar";
import Hospitals from "./pages/Dashboard/Hospitals";
import OrganisationPage from "./pages/Dashboard/Organisationpage";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Donation";
import Analytics from "./pages/Dashboard/Analytics";
import AdminHome from "./pages/admin/AdminHome";
import DonarList from "./pages/admin/DonarList";
import HospitalList from "./pages/admin/HospitalList";
import OrgList from "./pages/admin/OrganisationList";
import Home from "./components/Home/Home";


function App() {
  return (
    < >
    <ToastContainer/>
     <Routes>
    
    <Route exact path="/" element={<Home/>}/>
    
     <Route
          path="/org-list"
          element={
            <ProtectedRoute>
              <OrgList/>
            </ProtectedRoute>
          }/>
     <Route
          path="/hospital-list"
          element={
            <ProtectedRoute>
              <HospitalList/>
            </ProtectedRoute>
          }/>

     <Route
          path="/donar-list"
          element={
            <ProtectedRoute>
              <DonarList/>
            </ProtectedRoute>
          }/>
     <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }/>

     <Route path="/analytics" element={
       <ProtectedRoute>
         <Analytics/>   {/*  this protected route means that if only token is found then only homepage will be displayed else not */}
       </ProtectedRoute>
    }></Route>
     <Route path="/donation" element={
       <ProtectedRoute>
         <Donation/>   {/*  this protected route means that if only token is found then only homepage will be displayed else not */}
       </ProtectedRoute>
    }></Route>

     <Route path="/consumer" element={
       <ProtectedRoute>
         <Consumer/>   {/*  this protected route means that if only token is found then only homepage will be displayed else not */}
       </ProtectedRoute>
    }></Route>
     <Route path="/organisation" element={
       <ProtectedRoute>
         <OrganisationPage/>   {/*  this protected route means that if only token is found then only homepage will be displayed else not */}
       </ProtectedRoute>
    }></Route>
     <Route path="/hospital" element={
       <ProtectedRoute>
         <Hospitals/>   {/*  this protected route means that if only token is found then only homepage will be displayed else not */}
       </ProtectedRoute>
    }></Route>

     <Route path="/donar" element={
       <ProtectedRoute>
         <Donar/>   {/*  this protected route means that if only token is found then only homepage will be displayed else not */}
       </ProtectedRoute>
    }></Route>
      <Route path="/home" element={
       <ProtectedRoute>
         <HomePage/>   {/*  this protected route means that if only token is found then only homepage will be displayed else not */}
       </ProtectedRoute>
    }></Route>
      <Route path="/login" element={
      <PublicRoute>
        <Login/>
       </PublicRoute>
    }></Route>
      <Route path="/register" element={
      <PublicRoute>
        <Register/>
      </PublicRoute>}
      >
      </Route>
     </Routes>
    </>
  );
}

export default App;
