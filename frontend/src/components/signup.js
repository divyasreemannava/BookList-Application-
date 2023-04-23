import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/signup.css"
import axios from "axios"
const Signup = () =>{
    const navigate = useNavigate()
    const [user,setUser] = useState({name:"",password:""})
    const [cpass,setCpass] = useState() 
    const handlerName = (e)=>{
        if(e.length<=2){
            alert("please Valid name")
        }else{
            setUser({...user,name:e})
        }
    }
    const handlerpassword = (e)=>{
        if(e.length<6){
            alert("password should be of length min 6 characters")
        }else{
            setUser({...user,password:e})
        }
    }
    
    const handleCpassword = (e)=>{
        if(e!==user.password){
            alert("password and confirm password should be same")
        }
    }
    const handleRegister = ()=>{
        if(cpass==="" || user.name==="" || user.password === ""){
            alert("Please enter all the fields")
        }
        else{
            axios.post("http://localhost:5000/api/v1/register",user).then((data)=>{
                console.log(data)
                if(data.status===200){
                    alert("User registered successfully")
                    navigate("/",{replace:true})
                }
                
            }).catch((err)=>{
                console.log(err)
                if(err.message==="Request failed with status code 401"){
                    alert("User already Exists")
                }                
                

            })
            
        }
    }
    return (
        <>
        <div className="signupbox">
            <h3 className="text">Register</h3>
            <input className="rname" type="text" placeholder="Enter Name"  onBlur={(e)=>handlerName(e.target.value)}/><br></br><br></br><br></br>
            <input className="rpassword" type ="password" placeholder="Enter the Password"  onBlur={(e)=>handlerpassword(e.target.value)}/><br></br><br></br><br></br>
            <input className="cpassword" type ="password" placeholder="Re-Enter the Password"  onBlur={(e)=>handleCpassword(e.target.value)}/><br></br><br></br><br></br>
            <button className="submit" onClick={handleRegister}>Submit</button><br></br><br></br><br></br>
        </div>
        </>
    )
}
export default Signup