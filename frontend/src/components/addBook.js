import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import "../styles/bookbox.css"
// import { useNavigate } from "react-router-dom";
const Book = ()=>{
    const navigate = useNavigate()
    const [book,setBook] = useState({title:"",isbn:"",author:"",description:"",publishedDate:"",publisher:""})
    const handleLogut = () =>{
        navigate("/",{replace:true})
    }
    const handleaddBook = ()=>{
        if(book.title===""||book.isbn===""||book.author===""||book.description===""||book.publishedDate===""||book.publisher===""){
            alert("please enter all the fields")
        }else{
            axios.post("http://localhost:5000/api/v1/addNewBook",book).then((data)=>{
                console.log(data.status)
                if(data.status===200){
                    navigate("/display")
                }
            })
        }
        
    }
    return (
        <>
            
            <button className="logouts" onClick={handleLogut}>Log Out</button>
            <div className="bookbox"><br></br>
            <h3 className="text">Create New Book</h3>
                <input className="title" placeholder="Enter Book Title" onBlur={(e)=>{setBook({...book,title:e.target.value})}}></input><br></br><br></br><br></br>
                <input className="isbn" placeholder="isbn" onBlur={(e)=>{setBook({...book,isbn:e.target.value})}}></input><br></br><br></br><br></br>
                <input className="author" placeholder="Author" onBlur={(e)=>{setBook({...book,author:e.target.value})}}></input><br></br><br></br><br></br>
                <input  className="describe" placeholder="Describe the book" onBlur={(e)=>{setBook({...book,description:e.target.value})}}></input><br></br><br></br><br></br>
                <input className="date" placeholder="Published_date" onBlur={(e)=>{setBook({...book,publishedDate:e.target.value})}}></input><br></br><br></br><br></br>
                <input className="publisher" placeholder="Publisher of the book" onBlur={(e)=>{setBook({...book,publisher:e.target.value})}}></input><br></br><br></br><br></br>
                <button className="add" onClick={handleaddBook}>Submit</button><br></br>
            </div>
        </>

    )
}

export default Book