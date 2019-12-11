import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Charity from "./components/Charity";
import Navbar from "./components/Navbar";
import frontInfo from "./components/frontInfo";

function App() {
  return (
    <Router>
      <div
        className='App'
        style={{ backgroundColor: "#00cc66", color: "white" }}
      >
        <div className='container'>
          <Navbar />
          <Route path='/' component={frontInfo} />
          <Charity />
        </div>
      </div>
    </Router>
  );
}

export default App;
