import React from "react";
import { Card } from "react-bootstrap";

const Post = (props) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <h2>{props.baslik}</h2>
          <p>{props.mesaj}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
