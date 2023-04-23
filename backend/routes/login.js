const express = require("express");
const route = express.Router();
const User = require("../schemas/login.js");
const bcrypt = require("bcrypt");
const Book = require("../schemas/boolist.js")
const { set } = require("mongoose");
route.use(express.json());
let userdetails
route.post("/",async (req,res)=>{
    const {name,password} = {...req.body}
    console.log(name,password)
    try{
         userdetails = (await User.find({name:name}))
        if(!userdetails[0]){
            res.status(404).json({
                message:"User Not registered " 
            })
        }
        // console.log(userdetails[0].password)
        else{
            const confirm =await  bcrypt.compare(password,userdetails[0].password)
            if(confirm){
                res.status(200).json({
                    message:"User logged in successfully",
                    details:userdetails
                })
            }else{
                res.status(401).json({
                    message:"please enter correct password"
                })
            }
        }
    }catch(err){
        res.status(404).json({
            Error:err.message
        })
    }
})
route.post("/register",async (req,res)=>{
    const {name,password} = {...req.body}
    console.log(name,password)
    const data = await User.find({name})
    console.log(data)
    if(data[0]){
        res.status(401).json({
            message:"User already registered"
        })
    }else{
        try{
            bcrypt.hash(password,10,async function (err,hash){
                if(res){
                    const data = {
                        name:name,
                        password:hash
                    }
                    const rdata = await User.create(data)
                    res.status(200).json({
                        "details":rdata
                    })
                }
            })

        }catch(err){
            message:err.message
        }
        
        
    }
})

route.post("/addNewBook",async(req,res)=>{
    const data = {
        title:req.body.title,
    isbn:req.body.isbn,
    author:req.body.author,
    description:req.body.description,
    publishedDate:req.body.publishedDate,
    publisher:req.body.publisher
    }
    console.log(data)
    try{
        const book = await Book.create(data)
        res.status(200).json({
            booklist:book
        })
        console.log(book)
    }catch(err){
        res.status(404).json({
            message:err.message
        })   
    }
})

route.get("/",async(req,res)=>{
    console.log(userdetails[0]._id)
    
    const books = await Book.find()
    let array = [];
    for(let i=0;i<books.length;i++){
        array.push({"title":books[i].title,"author":books[i].author})
    }
    res.status(200).json({
        bookslist:array
    })
})


module.exports = route