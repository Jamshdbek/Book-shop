import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "../actions/bookActions";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import "../styles/catd.scss"
// import {buyBook} from "../actions/bookActions"
function BookCard(props) {
  const dispatch = useDispatch();
  const book = props.book;

  const deleteBook = () => {
    dispatch(removeBook(book.id));
  };

 
  
  return (
    <div >
  
      
    
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://avatars.mds.yandex.net/i?id=86867fcac3a93054e494bdbcd7f7b423-6088960-images-thumbs&n=13" />
      <Card.Body>
        <Card.Title>title: {book.title}</Card.Title>
        <Card.Text>
          author:
         {book.author}

        </Card.Text>
        <ListGroup.Item>
            
            <p>price: {book.price}</p>
          </ListGroup.Item>

      </Card.Body>
          <div className="buttoms">

        <Button  className="remove" onClick={deleteBook}>remove</Button>
        <Button cassName="buy"  onClick={()=>{props.handleChange(book.id)}}>buy</Button>
          </div>
    </Card>
    </div>
  );
}

export default BookCard;
