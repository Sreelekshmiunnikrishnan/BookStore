import React,{ useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Spinner from "../componenets/Spinner";
import BackButton from "../componenets/BackButton";
import axios from 'axios';
const DeleteBook = () =>{
  const[loading,setLoading] = useState([""]);
  const navigate = useNavigate();
  const {id} =useParams();
  const handleDeleteBook =() =>{
    setLoading(true);
    axios.delete(`http://localhost:5556/books/${id}`)
    .then(()=>{
      setLoading(false);
      navigate("/")
    }).catch((error) => {
      setLoading(false);
      alert('An Error happened,please check console');
      console.log(error);
    });
  };
    return(
      <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      <div className="flex flex-col border-2 border-sky-800  p-4 rounded-xl w-{600px} mx-auto">
      <h3 className="text-2xl">Are you Sure You want to delete this book?</h3>
      <button className="p-4 bg-red-600 text-white m-8 w-full"
      onClick={handleDeleteBook}>Yes,Delete it..</button>
        </div>  
        </div>
    );
}

export default DeleteBook;