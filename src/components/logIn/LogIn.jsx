import { useNavigate } from 'react-router-dom';

export function LogIn(){
    const navigate = useNavigate();
    const handleLogIn = ()=>{
        navigate('/userPage')
    }
    return(
        <p onClick={handleLogIn}>Log In</p>
    )
}