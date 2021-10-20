import React, { useContext } from "react";
import { Badge, Nav, Navbar, Container } from "react-bootstrap";
import { StoreContext } from "../../store";

const TopBar = () => {
  const context = useContext(StoreContext);
  const usd = (1 / context.kurlar.USD).toFixed(2);
  const eur = (1 / context.kurlar.EUR).toFixed(2);

  return (
    <Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Exchange</Navbar.Brand>
        <Nav className="ms-auto"></Nav>
        <Badge bg="warning" text="dark">
          $
        </Badge>
        {usd}₺ &nbsp;&nbsp; {/* &nbsp bosluk vermek icin kullanilir */}
        <Badge bg="danger" text="dark">
          €
        </Badge>
        {eur}₺
      </Container>
    </Navbar>
  );
};

export default TopBar;
