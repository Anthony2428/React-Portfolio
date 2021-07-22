import React from "react";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <section className="section">
      <Nav />
      <div className="container">
        <Main />
      </div>
    </section>
  );
}


export default App;
