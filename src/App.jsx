import { Navbar, Hero, Timeline, ProjectList, Contact } from "./components";
import React from "react";
import { navLinks } from "./constants";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Hero />
      <Timeline heading={"Work Experience"} />
      <Timeline heading={"Education"} />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
