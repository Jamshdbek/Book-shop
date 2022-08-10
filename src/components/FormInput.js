import React, {useState} from 'react';
import {addBook} from "../actions/bookActions";
import { useDispatch, useSelector} from "react-redux";

function FormInput(props) {
    let dispatch = useDispatch()
    const [book, setBook] = useState({});
    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };
    //Malumotlarni redduxga jonatish uchun handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBook(book));
        setBook({});
    };
    return (
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

    );
}

export default FormInput;