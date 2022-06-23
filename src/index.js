import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Component
import Layout from "./Layout";
import Signup from "./components/authentication/Signup";
import Profile from "./components/authentication/Profile";
import Login from "./components/authentication/Login";
import PrivateRoute from "./components/authentication/PrivateRoute";
import ForgotPassword from "./components/authentication/ForgotPassword";
import UpdateProfile from "./components/authentication/UpdateProfile";
import Dashboard from "./components/google-drive/Dashboard";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "./contexts/AuthContext";
import CenteredContainer from "./components/authentication/CenteredContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Drive */}
          <Route
            index
            element={
              <PrivateRoute>
                <Dashboard></Dashboard>
              </PrivateRoute>
            }
          />
          <Route element={<CenteredContainer />}>
            {/* User */}
            <Route
              path="user"
              element={
                <PrivateRoute>
                  <Profile></Profile>
                </PrivateRoute>
              }
            />
            <Route
              path="update-profile"
              element={
                <PrivateRoute>
                  <UpdateProfile></UpdateProfile>
                </PrivateRoute>
              }
            />
            {/* Auth */}
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
