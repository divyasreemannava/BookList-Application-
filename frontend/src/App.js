import React from "react"
import Login from "./components/login";
import {Routes,Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Display from "./components/display";
import Signup from "./components/signup";
import Book from "./components/addBook";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Login/>}></Route>
      <Route path = "/register" element={<Signup/>}></Route>
      <Route path="/display" element={<Display/>}></Route>
      <Route path="/addNewBook" element={<Book/>}></Route>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
