import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NoteForm from "./NoteForm";
import Notes from "./Notes";

const ToDoApp = () => {
  const [notlar, setNotlar] = useState([]);
  const add = (note) => {
    setNotlar([note, ...notlar]);
  };
  const remove = (id) => {
    const yeniDizi = notlar.filter((note) => note.id != id);
    setNotlar(yeniDizi);
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <NoteForm ekle={add} />
        </Col>
        <Col md={8}>
          <Notes notes={notlar} sil={remove} />
        </Col>
      </Row>
    </Container>
  );
};

export default ToDoApp;
