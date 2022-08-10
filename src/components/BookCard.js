import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "../actions/bookActions";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function BookCard(props) {
  const dispatch = useDispatch();
  const book = props.book;

  const deleteBook = () => {
    dispatch(removeBook(book.id));
  };

  const handleBuy = () => {
    // dispatch(buyBook(book.id))
  };

  return (
    <div >
      {/* <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      <p>{book.price}</p>
      <button onClick={deleteBook}>Remove</button>
      <button onClick={handleBuy}>Buy</button> */}

      <Card className="bookCard" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://avatars.mds.yandex.net/i?id=86867fcac3a93054e494bdbcd7f7b423-6088960-images-thumbs&n=13"
        />
        <Card.Body>
          {/* <Card.Title>{book.title}</Card.Title> */}
          <Card.Text>{book.author}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {/* <ListGroup.Item>Cras justo odio</ListGroup.Item> */}
          {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item> */}
          <ListGroup.Item>
            {" "}
            <p>{book.price}</p>
          </ListGroup.Item>
          <button onClick={deleteBook}>Remove</button>
          <button onClick={handleBuy}>Buy</button>
        </ListGroup>
      </Card>
    </div>
  );
}

export default BookCard;
