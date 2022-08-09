import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from '../actions/bookActions'
;
function BookCard(props) {
  const dispatch = useDispatch();
  const book = props.book;

  const deleteBook = () => {
    dispatch(removeBook(book.id))
  }

  return (
    <div className="bookCard">
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      <p>{book.price}</p>
      <button onClick={deleteBook}>Remove</button>
    </div>
  );
}

export default BookCard;
