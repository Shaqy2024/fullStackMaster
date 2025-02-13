import React,{useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
const [name,setName]=useState("");
const [password,setPssword]=useState("");
const [email,setEmail]=useState("");
const navigate = useNavigate();


useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth)
    {
       navigate('/')
    }
})


const collectData=async()=>{
   
let result = await fetch("full-stack-master.vercel.app/register", {
method:'post',
body: JSON.stringify({name,email,password}),
headers:{
    'Content-Type' : 'application/json'
},
});
result = await result.json()
console.warn(result);
localStorage.setItem("user", JSON.stringify(result))

if(result){
    navigate('/')
}


}
    return (
        <div className="register"> 
            <h1>Register</h1>
<input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
<input className="inputBox" type="text"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
<input className="inputBox" type="password" value={password} onChange={(e)=>setPssword(e.target.value)} placeholder="Enter Password" />
<button onClick={collectData} className="appbutton" type="button"> Sign Up</button>
        </div>
    )
}
export default SignUp;
