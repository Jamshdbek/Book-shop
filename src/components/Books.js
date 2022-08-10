import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "./BookCard";
import "../styles/catd.scss";
import { cartAction } from "../actions/cartAction";

function Books() {
  const books = useSelector((state) => state.books);
  const cartArr = useSelector((state) => state.cart);
  let dispatch = useDispatch();
// console.log(books.price);
  const handleChange = (id) => {
    const buyBook = books.find((book) => book.id === id);
    if (cartArr.find((book) => book.id === id)) {
      alert("bu kitob bor");
    } else {
      dispatch(cartAction([...cartArr, buyBook]));
    }
  };
  return (
    <div className="body_card">
      {books.map((book) => {
        return (

          <BookCard key={book.id} book={book} handleChange={handleChange} />
          
        );
      })}
    </div>
  );
}

export default Books;
