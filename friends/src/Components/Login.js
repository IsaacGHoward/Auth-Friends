
import React, { useState } from 'react';
import axios from 'axios';

export default function Login(props){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //{ username: 'Lambda School', password: 'i<3Lambd4' }
  const login = e => {
    e.preventDefault();
    setIsLoading(true);
    axios.post("http://localhost:5000/api/login", {username: 'Lambda School', password: 'i<3Lambd4'}).
      then(res => {
        console.log(res);
        setIsLoading(false);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friendslist");
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return(
    <div>
      <form onSubmit={(e) => login(e)}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Log in</button>
        {isLoading &&
          <div>Loading ...</div>
        }
      </form>
    </div>
  )
} 