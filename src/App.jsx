import {
  Navbar,
  Hero,
  Experience,
  ProjectList,
  Footer,
} from "./components";
import React from "react";

function App() {
  return (
    <div className="max-w-7xl m-auto">
      <div className="h-screen flex flex-col">
        <Navbar/>
        <Hero />
      </div>
      <Experience /> 
      <ProjectList />
      <Footer />
      <a href="#Home" className="bg-white fixed bottom-0 right-0 m-8 text-gray-600 border px-6 py-2 rounded-3xl my-8 w-fit">Back to Top</a>
    </div>
  );
}

export default App;
