import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "../actions/bookActions";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// import {buyBook} from "../actions/bookActions"
function BookCard(props) {
  const dispatch = useDispatch();
  const book = props.book;

  const deleteBook = () => {
    dispatch(removeBook(book.id));
  };

 
  
  return (
    <div >
  
      <Card className="bookCard" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://avatars.mds.yandex.net/i?id=86867fcac3a93054e494bdbcd7f7b423-6088960-images-thumbs&n=13"
        />
        <Card.Body>
          <Card.Text>{book.author}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        
          <ListGroup.Item>
            {" "}
            <p>{book.price}</p>
          </ListGroup.Item>
          <button onClick={deleteBook}>Remove</button>
          <button onClick={()=>{props.handleChange(book.id)}}>Buy</button>
        </ListGroup>
      </Card>
    </div>
  );
}

export default BookCard;
