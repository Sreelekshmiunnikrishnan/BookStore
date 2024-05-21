import React,{useEffect,useState} from "react";
import { useParams,useNavigate } from "react-router-dom";
import Spinner from "../componenets/Spinner";
import BackButton from "../componenets/BackButton";
import axios from 'axios';
const EditBooks =() =>{
  const[loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} =useParams();
  const[title,setTitle] = useState([""]);
  const[author,setAuthor] = useState([""]);
  const[publishYear,setPublishYear] = useState([""]);

  useEffect(() => {
    setLoading(true);
    // Fetch books data from your backend API
    axios.get(`http://localhost:5556/books/${id}`)
      .then((response) => {
        
          setTitle(response.data.title);
          setAuthor(response.data.author);
          setPublishYear(response.data.publishYear);
          setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An Error happened,please check console');
        console.error(error);
        });
  }, []);

  const handleEditBook =() =>{
    const data ={
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios.put(`http://localhost:5556/books/${id}`,data)
    .then(()=>{
      setLoading(false);
      navigate("/")
    }).catch((error)=> {
      setLoading(false);
      alert('An Error happened,please check console');
      console.log(error);
    });
  };
    return(
      <div className="p-4">
      <BackButton />
      <h1 className="text-2xl my-4">Edit Book</h1>
      
      <div className="flex flex-col border-2 border-sky-800  p-4 rounded-xl w-{600px} mx-auto">

        <div className="my-4">
          <label  className="text-xl mr-4 text-gray-500">Title</label>
          <input type="text" 
          value={title} 
          onChange={(e)=>setTitle(e.target.value)} 
          className="border-2 border-gray-500 px-4 py-2 w-full" />
        </div>
        <div className="my-4">
          <label  className="text-xl mr-4 text-gray-500">Author</label>
          <input type="text" 
          value={author} 
          onChange={(e)=>setAuthor(e.target.value)} 
          className="border-2 border-gray-500 px-4 py-2 w-full" />
        </div>
        <div className="my-4">
          <label  className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input type="text" 
          value={publishYear} 
          onChange={(e)=>setPublishYear(e.target.value)} 
          className="border-2 border-gray-500 px-4 py-2 w-full" />
        </div>
        <button className="p-2 bg-sky-300 m-8 text-white-200" onClick={handleEditBook} >SAVE</button>
      </div>

     </div>
  
    );
}

export default EditBooks;