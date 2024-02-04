import React from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";

import Login from "./login.jsx";
import Register from "./register.jsx";
import Invoice from "./Invoice/invoice.jsx";

const Pages = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
      </Router>
    </>
  );
};

export default Pages;
