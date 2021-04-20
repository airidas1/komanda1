import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
/* Backend routes */
import AdminLogin from './pages/Admin/AdminLogin'
import AdminPanel from './pages/Admin/AdminPanel'

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
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/v1/admin/login'>
            <AdminLogin />
          </Route>
          <Route path='/v1/admin/panel'>
            <AdminPanel />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
