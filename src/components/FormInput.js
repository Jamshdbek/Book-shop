import React, {useState} from 'react';
import {addBook, saidbarOpen} from "../actions/bookActions";
import {useDispatch, useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function FormInput(props) {
    let show = useSelector((state)=>state.param)
    const handleClose = false

    let dispatch = useDispatch()
    const [book, setBook] = useState({});
    const handleChange = (e) => {
        setBook({...book, [e.target.name]: e.target.value});
    };
    //Malumotlarni redduxga jonatish uchun handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBook(book));
        setBook({});
    };

    return (
        <>
            <Offcanvas show={show} onHide={()=>{dispatch(saidbarOpen(false))}}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
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
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );

}

export default FormInput;
