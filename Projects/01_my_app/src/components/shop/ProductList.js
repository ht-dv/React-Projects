import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../../data/products.json";
import Product from "./Product";

const ProductList = () => {
  return (
    <Container className="my-5">
      <Row className="g-5">
        {data.map((product) => {
          const { id, image, title, desc, price } = product;
          return (
            <Col md={4} key={id}>
              {/* Burada unique bir key degeri olamali donen her eleman icin, o sebeple data'nin icindeki json dosyasina id ekledik. 2. yontem de burada map parantezi icine index eklemek ve key icine de index yazmak */}
              <Product image={image} title={title} desc={desc} price={price} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductList;
