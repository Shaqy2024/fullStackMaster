import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const Login = () =>{
const [email, setEmail] = React.useState('')
const [password, setPssword] = React.useState('')
const navigate = useNavigate();
useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
        navigate('/')
    }
})
const handleLogin = async () =>{
   let result = await fetch("http://localhost:5000/login", {
    method:'post',
    body:JSON.stringify({email,password}),
    headers:{
        'Content-Type' : 'application/json'
    }
   });        
   result = await result.json();
   console.log(result)
   if(result.name){
localStorage.setItem("user", JSON.stringify(result));
navigate('/')
   }else{
    alert("please enter correnct details")
   }
}

    return(
        <div className="login">
           <input className="inputBox" type="text" placeholder=" enter email"
           onChange={(e)=>setEmail(e.target.value)} />
           <input className="inputBox" type="password" placeholder="enter password"
           onChange={(e)=>setPssword(e.target.value)} />
           <button onClick={handleLogin}  className="appbutton" type="button"> Login</button>
        </div>
    )
}
export default Login;

