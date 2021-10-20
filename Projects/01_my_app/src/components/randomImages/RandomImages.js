import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

const RandomImages = () => {
  const [sayi, setSayi] = useState(1);

  const sayiUret = () => {
    const randomSayi = Math.floor(Math.random() * 10 + 1); //* Math.random()*(ustSinir-altSinir+1) +altSinir
    setSayi(randomSayi);
    console.log(sayi);
  };

  return (
    <Container className="mt-5">
      <Card>
        {sayi >= 1 && sayi <= 3 ? (
          <Card.Img variant="top" src="assets/img/manzara-01.jpg" />
        ) : sayi > 3 && sayi <= 7 ? (
          <Card.Img variant="top" src="assets/img/manzara-02.jpg" />
        ) : (
          <Card.Img variant="top" src="assets/img/manzara-03.jpg" />
        )}

        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Button variant="primary" onClick={sayiUret}>
            Değiştir {sayi}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RandomImages;