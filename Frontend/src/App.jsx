import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route,Routes} from 'react-router-dom';
import CreateBooks from './pages/CreateBooks';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import ShowBooks from './pages/ShowBooks';
import Home from './pages/Home';
function App() {
 

  return (
   <Routes>
    <Route path ="/" element ={<Home></Home>}/>
       <Route path ="/books/create" element ={<CreateBooks></CreateBooks>}/>
       <Route path ="/books/details/:id" element ={<ShowBooks></ShowBooks>}/>
       <Route path ="/books/edit/:id" element ={<EditBook></EditBook>}/>
       <Route path ="/books/delete/:id" element ={<DeleteBook></DeleteBook>}/>
   </Routes>
  )
}

export default App
