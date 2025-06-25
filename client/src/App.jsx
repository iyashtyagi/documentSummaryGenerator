import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage, SummaryPage } from "./pages";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gen" element={<SummaryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
