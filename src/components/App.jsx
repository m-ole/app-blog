import React from "react";
import Header from "./static/Header";
import Footer from "./static/Footer";
import Router from "../config/Router";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
