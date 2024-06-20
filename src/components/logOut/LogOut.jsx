
export function LogOut({setLoggedIn,setUser}){
    const handleLogOut = ()=>{
        setLoggedIn(false);
        setUser({username: 'Guest'});
    }
    return (
        <p onClick = {handleLogOut}>Log Out</p>
    )
}