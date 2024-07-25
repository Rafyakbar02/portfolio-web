import {
  Navbar,
  Hero,
  Experience,
  Timeline,
  ProjectList,
  Contact,
  Footer,
} from "./components";
import React, { useState } from "react";

function App() {
  return (
    <div>
      <div className="h-screen flex flex-col">
        <Navbar/>
        <Hero />
      </div>
      <Experience /> 
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
