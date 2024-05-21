import express from 'express'
import {Book} from '../models/bookModel.js'
const router = express.Router();

//Route to get books
router.get("/",async(req,res) =>{
    try{
  
      const books = await Book.find();
      if(!books){
        res.status(404).send({message:"Books not found"});
      }
      else{
        res.status(200).json(books);
      }
      
    }catch(error){
      console.log(error);
      res.status(500).send({message:error.message});
    }
      
  });
  //Route to get one book
  
  router.get("/:id",async (req,res) =>{
    try{
    const id = req.params.id;
    const books = await Book.findById(id);
    if(!books){
      res.status(404).send({message:"Book not found"});
    }
    else{
      res.status(200).send(books);
    }
  }catch(error){
    console.log(error);
    res.status(500).send({message:error.message});
  }
  });
  
  //Route to create books
  router.post("/",async(req,res) => {
      try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
          res.status(400).send({message:"send all required fields : title,author,publishYear"});
   }
        else{
          const newBook = {
          title:req.body.title,
          author:req.body.author,
          publishYear:req.body.publishYear
      };
      const book = await Book.create(newBook);
      return res.status(201).send(book);
        }
      }catch(error)
      {
          console.log(error);
          res.status(500).send({message:error.message});
      }
  })
  //Route to update books
  
  router.put("/:id",async(req,res) =>{
    try{
      const id = req.params.id;
      const updatedBooks =await Book.findByIdAndUpdate(id,req.body);
      res.status(200).json({message:`Updated books for ${req.params.id}`} + updatedBooks);
    }catch(error)
      {
          console.log(error);
          res.status(500).send({message:error.message});
      }
  });
  
   //Route to delete books
  router.delete("/:id",async(req,res) =>{
    try{
      const id = req.params.id;
    const deletedBooks = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBooks) {
        return res.status(404).json({ message: 'Book  not found' });
    }else{
      res.status(200).json({message:`Deleted books for ${req.params.id}`} + deletedBooks);
    }
  }catch(error)
  {
      console.log(error);
      res.status(500).send({message:error.message});
  }
  
    
  });

  export default router;