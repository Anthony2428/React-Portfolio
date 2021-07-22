import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
    <section className="section has-background-info-dark">
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/projects" component={Main}/>
        </Switch>
      </div>
      <Footer />
    </section>
    </Router>
  );
}


export default App;
