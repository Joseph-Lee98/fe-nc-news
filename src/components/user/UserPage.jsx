import { useState } from 'react';
import {fetchUsers} from "../../utils/api"
import './UserPage.css'

export function UserPage({user,setUser,setLoggedIn}){

    const selectUserObj = (username,userArr)=>{
        const singleUserArr = userArr.filter((userObj)=>userObj.username===username)
        return singleUserArr[0]
    }

    const [selectedUser, setSelectedUser] = useState('');
    const handleUserLogIn = (e)=>{
        e.preventDefault();
        fetchUsers()
        .then((users)=>{
            // console.log(users.data.users)
            setUser(selectUserObj(selectedUser,users.data.users))
        })
        .then(()=>{
            setLoggedIn(true);
            setSelectedUser('');
        })
        

    }
    return (
        <div id="user-page-container">
            <section id="login-form-container">
                <h2>User Login:</h2>
                <form onSubmit={handleUserLogIn}>
                    <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                        <option value="">Select username</option>
                        <option value="tickle122">tickle122</option>
                        <option value="grumpy19">grumpy19</option>
                        <option value="happyamy2016">happyamy2016</option>
                        <option value="cooljmessy">cooljmessy</option>
                        <option value="weegembump">weegembump</option>
                        <option value="jessjelly">jessjelly</option>
                    </select>
                    <button type='submit'>Log In</button>
                </form>
            </section>
        </div>
    )
}