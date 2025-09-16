import React , {useState} from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { login } from '../services/authService'; 
import {useNavigate} from 'react-router-dom';

function Login(){
    
    const [userName, setUserName]= useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");

    const navigate=useNavigate();

    async function  handleLogin(e)
    {
        e.preventDefault();
        try{
            const response=await login({userName,password});
             if(response.flag===false)
             {
             setError("Invalid Credentials");
             }
            else{
                setError("");
                navigate("/home");
            }

        }
        catch (err)
        {
            console.error(err);
        }
    }

    return(
        <form onSubmit={handleLogin} className="p-6 max-w-sm mx-auto border rounded shadow">
            <h1 className="text-xl font-bold mb-4">Login</h1>
            <Input 
            label="UserName" 
            type="text" 
            placeholder="Enter your Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}/>

            <Input 
            label="Password"
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            />
          <Button type="submit">Login</Button>
          {error && <div>{error}</div>}
        </form>
    );
}

export default Login;