import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import Spinner from "../componenets/Spinner";
import BackButton from "../componenets/BackButton";
import axios from 'axios';
const ShowBooks =()=> {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} =useParams();
    useEffect(() => {
        setLoading(true);
        // Fetch books data from your backend API
        axios.get(`https://bookstore-cukn.onrender.com/books/${id}`)
          .then((response) => {
            if (response.data) {
             
              setBooks(response.data);
            }
            else {
              setBooks([]);
            }
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching books:', error);
            setBooks([]);
            setLoading(false);
          });
      }, []);
    return(
        <div className="p-4">
            <BackButton/>
          <h1 className="text-3xl">Show Book</h1>
        {loading ? (
          <Spinner></Spinner>
        ) : (
            <div className="flex flex-col border-2 border-sky-800  p-4 rounded-xl w-{600px} mx-auto">
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">Id</span>
                    <span>{books._id}</span>
                </div>
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">Title</span>
                    <span>{books.title}</span>
                </div>
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">Author</span>
                    <span>{books.author}</span>
                </div>
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">Publish Year</span>
                    <span>{books.publishYear}</span>
                    <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">Create Time</span>
                    <span>{new Date(books.createdAt).toString()}</span>
                </div>
                <div className="my-4">
                    <span className="text-xl mr-4 text-gray-500">Last updated Time</span>
                    <span>{new Date(books.updatedAt).toString()}</span>
                </div>
                </div>
                </div>
        )
    }
    </div>
    );
}

export default ShowBooks;