import React from "react";

import { Outlet } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

const Layout = () => {
  return (
    <AuthProvider>
      <Outlet></Outlet>
    </AuthProvider>
  );
};

export default Layout;
