import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './Components/Login'

import axios from 'axios';

function App() {

  const logout = () => {
    localStorage.removeItem("token");
  }
  return (
    <Router>
      <Link to="/login">Login</Link>
      <Link onClick={logout}>Logout</Link>
      <Switch>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
