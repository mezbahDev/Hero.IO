import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Apps from "./pages/Apps";
import Installation from "./pages/Installation";
import AppDetail from "./pages/AppDetail";

function App() {
  const [installedApps, setInstalledApps] = useState([]);

  const handleInstall = (app) => {
    if (!installedApps.find((a) => a.id === app.id)) {
      setInstalledApps([...installedApps, app]);
    }
  };

 return (
    <Router>
      <Routes>
        <Route path="/" element={<Apps handleInstall={handleInstall} />} />
        <Route
          path="/installation"
          element={<Installation installedApps={installedApps} />}
        />
        <Route path="/app/:id" element={<AppDetail />} />
      </Routes>
    </Router>
  );
}

export default App;