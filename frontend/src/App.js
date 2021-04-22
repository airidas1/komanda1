import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
/* Backend routes */
import AdminLogin from './pages/Admin/AdminLogin';
import AdminPanel from './pages/Admin/AdminPanel';
import Carrer from './pages/Carrer';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

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
