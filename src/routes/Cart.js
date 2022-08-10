import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
function Cart() {
  const books = useSelector((state) => state.cart);
  return (
    <div className="cart_body">
      {books.map((book) => {
        return (
          <Card cassName="card" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://avatars.mds.yandex.net/i?id=86867fcac3a93054e494bdbcd7f7b423-6088960-images-thumbs&n=13"
            />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.author}</Card.Text>
              <ListGroup.Item>
                <p>{book.price}</p>
              </ListGroup.Item>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Cart;
