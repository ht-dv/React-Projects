import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ListGroup defaultActiveKey="home">
      <ListGroup.Item as={Link} to="/" eventKey="home">
        Homepage
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="borntoday">Birthday</Link>
      </ListGroup.Item>
      <ListGroup.Item>
        <Link to="bs-classic">Bootstrap Classic</Link>
      </ListGroup.Item>
      <ListGroup.Item>Bootstrap React</ListGroup.Item>
      <ListGroup.Item>Clock1</ListGroup.Item>
      <ListGroup.Item>Clock2</ListGroup.Item>
      <ListGroup.Item as={Link} to="/todoapp">
        ToDoApp
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/exchange" eventKey="exchange">
        Exchange
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Menu;
