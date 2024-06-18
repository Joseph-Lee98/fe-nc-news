
export function LogOut({setLoggedIn,setUser}){
    const handleLogOut = ()=>{
        setLoggedIn(false);
        setUser('Guest');
    }
    return (
        <p onClick = {handleLogOut}>Log Out</p>
    )
}