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
  const [darkMode, setDarkMode] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${darkMode ? "dark bg-slate-900" : ""} font-sans`}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggle={toggle}
        setToggle={setToggle}
      />
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
