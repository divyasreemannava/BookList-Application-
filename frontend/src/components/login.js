import { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"

import axios from "axios"
import "../styles/login.css"
const Login = () => {
        const navigate = useNavigate()
        const [details,setDetails] = useState([{name:"",password:""}]);
        // console.log(details)
        const handleSubmit = () =>{
            axios.post("http://localhost:5000/api/v1/",details).then((data)=>{
                console.log(data)
                if(data.status===200){
                    alert("User logged in successfully")
                    navigate("/display")
                }
                
            }).catch((err)=>{
                console.log(err)
                if(err.message==="Request failed with status code 401"){
                    alert("User Not registered")
                }
                if(err.message==="Request failed with status code 404"){
                    alert("Please Enter correct password")
                }
                
            })
            // navigate("/display")
        }
        const handleName = (e)=>{
            if(e.length<=2){
                alert("please Valid name")
            }else{
                setDetails({...details,name:e})
            }
        }
        const handlePassword = (e)=>{
            if(e.length<6){
                alert("password should be of length min 6 characters")
            }else{
                setDetails({...details,password:e})}
            }
        const handleSignUp = () =>{
            navigate("/register")
        }
    return (
        <div className="appbody" >
        <div className = "box"><br></br>
            <h3 className="text">Member Login</h3><br></br>
            <input className="name" type="text" placeholder="Enter Name" onChange={(e)=>{setDetails({...details,name:e.target.value})}} onBlur={(e)=>handleName(e.target.value)}/><br></br><br></br><br></br>
            <input className="password" type ="password" placeholder="Enter the Password" onChange={(e)=>{setDetails({...details,password:e.target.value})}} onBlur={(e)=>handlePassword(e.target.value)}/><br></br><br></br><br></br>
            <button className="login" onClick={handleSubmit}>Login</button><br></br><br></br><br></br>
            <button className="signup" onClick={handleSignUp}>Sign Up</button>
        </div>        
        </div>
    )
}

export default Login