import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import ChooseEd from './pages/ChooseEd';
/* Backend routes */
import AdminLogin from './pages/Admin/AdminLogin';
import AdminPanel from './pages/Admin/AdminPanel';
import Carrer from './pages/Carrer';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import Results from './pages/Results';
import School1 from './pages/School1';
import School2 from './pages/School2';
import School3 from './pages/School3';
import Facts from './pages/Facts';
import Test from './pages/Test';

function App() {
  return (
    <>
      <Router>
        <Header url={window.location.pathname} />
        <Switch>
          <Route exact path='/v1'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/education'>
            <Education />
          </Route>
          <Route path='/choose'>
            <ChooseEd />
          </Route>
          <Route path='/faq'>
            <FAQ />
          </Route>
          <Route path='/v1/admin/login'>
            <AdminLogin />
          </Route>
          <Route path='/v1/admin/panel'>
            <AdminPanel />
          </Route>
          <Route path='/carrer'>
            <Carrer />
          </Route>
          <Route path='/results' render={(props) => <Results {...props} />}>
          </Route>
          <Route path='/school1'>
            <School1 />
          </Route>
          <Route path='/school2'>
            <School2 />
          </Route>
          <Route path='/school3'>
            <School3 />
          </Route>
          <Route path='/facts'>
            <Facts />
          </Route>
          <Route path='/test'>
            <Test />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
