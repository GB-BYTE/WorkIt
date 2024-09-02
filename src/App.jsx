import React from "react";
import Hero from "./Components/Hero";
import Content from "./Components/Content";
import Cta from "./Components/Cta";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
        <Hero/>
        <Content/>
        <Cta></Cta>
        <Footer></Footer>
    </div>
  );
}

export default App;
