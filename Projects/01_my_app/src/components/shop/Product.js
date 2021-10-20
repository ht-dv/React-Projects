import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = (props) => {
  const { image, title, desc, price } = props;

  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={require(`../../assets/img/${image}`).default}
        />
        {/*Burada resim sureli degisecegi icin resim adi yerine degiskeni
        yaziyoruz*/}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Card.Text>$ {price}</Card.Text>
          <Button variant="warning">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
