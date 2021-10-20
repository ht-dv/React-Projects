import React from "react";
import { Card } from "react-bootstrap";

const UserCard = (props) => {
  const { image, name, url } = props;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            <a href={url} target="_blank">
              {name}
            </a>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
