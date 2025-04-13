import React from "react";
import {BrowserRouter as Router, Routes, Route, useNavigate, useLocation} from "react-router-dom";
import Spot from "./pages/spot";

// App.tsx

const App: React.FC = () => {
  /* const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") {
    navigate("/newTestSite/");
  } */

  return (
      <Router>
        <Routes>
            <Route path="/newTestSite/" element={<Spot />}  />
            <Route path="/newTestSite/spot/*" element={<Spot />} />
        </Routes>
      </Router>
  );
};

export default App;
