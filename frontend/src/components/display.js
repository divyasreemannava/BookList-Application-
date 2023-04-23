import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { json, useNavigate } from "react-router-dom"
import "../styles/display.css"
import image from "../images/bookImage.png"
const Display =() =>{
    const [list,setList] = useState([])
    const navigate = useNavigate()
    const handleBook = ()=>{
        navigate("/addNewBook")
    }
    const handleLogut = () =>{
        navigate("/",{replace:true})
    }
    useEffect(()=>{
        axios.get("http://localhost:5000/api/v1/").then((data)=>{
        
        // console.log(data.data.bookslist)
        setList(data.data.bookslist.map((b)=>{
            return b
        }))
        console.log(list[0].b.title)

        })
    },[])
    return (
        <>
        <div className="flbox">
        <button className="addbook" onClick={handleBook}>Add New Book</button>
        <button className="logout" onClick={handleLogut}>Log Out</button>
        </div>
        <h3 className="text">Books List</h3><br></br>
            <div className="bookslistbox">
                
                {list.map((data,index)=>{
                    return <>
                        `<div><img className="images" src={image}></img>
                        <p>Title : {data.title}</p>
                        <p>Author :{data.author}</p>`
                        </div>
                        
                    </>
                })}
            </div>
            
        </>
    )
}
export default Display