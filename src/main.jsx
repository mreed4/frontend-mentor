import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./Contexts/AppContext.jsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import StartPage from "./Components/Pages/StartPage.jsx";

import DestinationsPage from "./Components/Pages/DestinationsPage.jsx";
import DestinationPage from "./Components/Pages/DestinationPage.jsx";

import CrewPage from "./Components/Pages/CrewPage.jsx";
import CrewMemberPage from "./Components/Pages/CrewMemberPage.jsx";

import TechnologiesPage from "./Components/Pages/TechnologiesPage.jsx";
import TechnologyPage from "./Components/Pages/TechnologyPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<StartPage />} />
            <Route path="destinations" element={<DestinationsPage />}>
              <Route index element={<Navigate to="moon" state={"moon"} />} />
              <Route path=":destinationName" element={<DestinationPage />} />
            </Route>
            <Route path="crew" element={<CrewPage />}>
              <Route index element={<Navigate to="douglas-hurley" state={"douglas-hurley"} />} />
              <Route path=":crewMemberID" element={<CrewMemberPage />} />
            </Route>
            <Route path="technology" element={<TechnologiesPage />}>
              <Route index element={<Navigate to="launch-vehicle" state={"launch-vehicle"} />} />
              <Route path=":technologyID" element={<TechnologyPage />} />
            </Route>
            <Route path="*" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  </React.StrictMode>
);
