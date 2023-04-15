import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import * as pages from "../page";

export default function Authen() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<pages.StudentPage />} />
        </Routes>
      </Router>
    </div>
  );
}
