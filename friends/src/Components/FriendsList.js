import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {axiosWithAuth} from '../Util/axiosWithAuth';
export default function FriendsList(props){
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState({
    name:'',
    age:'',
    email:''
  })
  useEffect(() => {
    getFriends();
  }, [])
  const inputChange = (e) => {
    setNewFriend({...newFriend, [e.target.name]: e.target.value})
  }
  const getFriends = () => {
    axiosWithAuth().get('/friends')
    .then(res => {
      console.log(res);
      setFriends(res.data); 
    })
    .catch(err => console.log(err));
  }
  const addNewFriend = () => {
    axiosWithAuth().post('/friends', newFriend)
    .then(res => {
      console.log(res);
      setFriends(res.data);
    })
    .catch(err => console.log(err));
  }
  return(
    <div>
      <form onSubmit={addNewFriend}>
        <label for="name">Name: </label>
          <input
            type="text"
            name="name"
            value={newFriend.username}
            onChange={(e) => inputChange(e)}
          />
        <label for="age">Age: </label>
          <input
            type="text"
            name="age"
            value={newFriend.age}
            onChange={(e) => inputChange(e)}
          />
        <label for="email">Email: </label>
          <input
            type="text"
            name="email"
            value={newFriend.email}
            onChange={(e) => inputChange(e)}
          />
          <button>Submit New Friend</button>
      </form>
      <ul>
      {
        friends.map((friend) => {
          return <li>{friend.name}, Age: {friend.age}, Email: {friend.email}</li>
        })
      }
      </ul>
    </div>
  )
}