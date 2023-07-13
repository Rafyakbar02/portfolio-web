import {
  Navbar,
  Hero,
  Timeline,
  ProjectList,
  Contact,
  Footer,
} from "./components";
import React from "react";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Hero />
      <Timeline heading={"Work Experience"} />
      <Timeline heading={"Education"} />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
