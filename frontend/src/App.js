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
import HowTo from './pages/Admin/HowTo'
import Carrer from './pages/Carrer';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import Results from './pages/Results';

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
            {/* <Results /> */}
          </Route>
          <Route path='/v1/admin/howto'>
            <HowTo />
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
