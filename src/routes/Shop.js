import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { addBook } from "../actions/bookActions";
import Books from "../components/Books";

function Shop() {
  let dispatch = useDispatch();
  const [book, setBook] = useState({});
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    setBook({});
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={book.title || ""}
          placeholder="Title"
        />
        <input
          type="text"
          name="author"
          onChange={handleChange}
          value={book.author || ""}
          placeholder="Author"
        />
        <input
          type="text"
          name="price"
          onChange={handleChange}
          value={book.price || ""}
          placeholder="Price"
        />
        <button>Submit</button>
      </form>

      <Books />
    </div>
  );
}

export default Shop;
