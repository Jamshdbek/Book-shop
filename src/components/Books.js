import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import "../styles/catd.scss"
function Books() {
  const books = useSelector(state=> state.books);
  return (
    <div className='body_card'>
      {books.map((book)=>{
        return <BookCard key={book.id} book={book}/>
      })}
    </div> 
  )
}

export default Books