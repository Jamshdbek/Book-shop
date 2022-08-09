import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';

function Books() {
  const books = useSelector(state=> state.books);
  return (
    <div>
      {books.map((book)=>{
        return <BookCard key={book.id} book={book}/>
      })}
    </div> 
  )
}

export default Books