import { Link } from "react-router-dom";
import {LogOut} from "../logOut/LogOut";
import {LogIn} from "../logIn/LogIn";
import { useState,useEffect } from 'react'
import './Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function Header({loggedIn,setLoggedIn,user,setUser}) {
  // useEffect(()=>{
  //   console.log('avatar is ', user.avatar_url)
  // },[avatar])
    return (
      <header>
          <ul id='upper-header-container'>
            <li>
              <Link to="/">
                <img src="src/assets/nc_logo.png" id='logo' alt='NC news logo'/>
              </Link>
            </li>
            <li>
              <h1>NC News</h1>
            </li>
            <li>
              <ul id="header-user-information">
                <li>
                  {loggedIn ? <LogOut setLoggedIn={setLoggedIn} setUser={setUser}/> : <LogIn/>}
                </li>
                <li>
                  <p>{user.username}</p>
                </li>
                <li>
                  {loggedIn ? <img id='avatar' src={user.avatar_url}/> : <AccountCircleIcon id="guest-icon"/>}
                </li>
              </ul>
            </li>
          </ul>
      </header>
    );
  }