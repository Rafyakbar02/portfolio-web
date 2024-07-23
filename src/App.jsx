import {
  Navbar,
  Hero,
  Timeline,
  ProjectList,
  Contact,
  Footer,
} from "./components";
import React, { useState } from "react";

function App() {
  return (
    <div className="bg-black text-white">
      <div className="h-screen flex flex-col">
        <Navbar/>
        <Hero />
      </div>
      {/* <Timeline heading={"Experience"} />
      <Timeline heading={"Education"} />
      <ProjectList />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
