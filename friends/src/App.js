import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PrivateRoute } from './Components/PrivateRoute';

import Login from './Components/Login';
import FriendsList from './Components/FriendsList';

import axios from 'axios';

function App() {

  const logout = () => {
    localStorage.removeItem("token");
  }
  return (
    <Router>
      <Link to="/login">Login </Link>
      <Link onClick={logout}>Logout </Link>
      <Link to="/friendslist">Friends List </Link>
      <Switch>
        <PrivateRoute exact path="/friendslist">
          <FriendsList/>
        </PrivateRoute>
        <Route path="/login" component={Login}/>
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
