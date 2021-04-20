import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminLogin from './pages/Admin/AdminLogin'
import AdminPanel from './pages/Admin/AdminPanel'
import './App.css';

function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route exact path='/v1'>
              <div>asd</div>
            </Route>
            <Route path='/v1/admin/login'>
              <AdminLogin />
            </Route>
            <Route path='/v1/admin/panel'>
              <AdminPanel />
            </Route>
          </Switch>
        </Router>
    </>
  );
}

export default App;
