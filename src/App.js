/* Components */
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
/* React */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

/* Code */
export const APP_ID = process.env.REACT_APP_REALM_APP_ID;

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Hero />
    </Router>
  );
}
