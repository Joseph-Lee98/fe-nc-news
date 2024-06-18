import { Link } from "react-router-dom";
import {LogOut} from "../logOut/LogOut";
import {LogIn} from "../logIn/LogIn";
import { useState } from 'react'
import './Header.css';

export function Header({loggedIn,setLoggedIn,user,setUser}) {
  const [avatar,setAvatar] = useState('src/assets/profile.png');
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
                  <p>{user}</p>
                </li>
                <li>
                  <img id='avatar' src={avatar}/>
                </li>
              </ul>
            </li>
          </ul>
      </header>
    );
  }