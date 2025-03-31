import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Spot from "./pages/spot";
import Trenches from "./pages/trenches";
import Perps from "./pages/perps";

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
            <Route path="/newTestSite/" element={<Spot />}  />
          <Route path="/newTestSite/spot/*" element={<Spot />} />
          <Route path="/newTestSite/trenches" element={<Trenches />} />
          <Route path="/newTestSite/perps" element={<Perps />} />
        </Routes>
      </Router>
  );
};

export default App;
