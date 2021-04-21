import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import ChooseEd from "./pages/ChooseEd";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/choose">
            <ChooseEd />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login"></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
