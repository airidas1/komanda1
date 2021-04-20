import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Carrer from './pages/Carrer';
import FAQ from './pages/FAQ';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/v1'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/faq'>
            <FAQ />
          </Route>
          <Route path='/carrer'>
            <Carrer />
          </Route>
          <Route path='/admin'>
          </Route>
        </Switch>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
