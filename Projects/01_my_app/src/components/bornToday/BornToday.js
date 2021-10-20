import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import data from "../../data/people.json";
import Person from "./Person";

const BornToday = () => {
  const [people, setPeople] = useState(data);
  const temizle = () => {
    setPeople([]); //* Bu bir dizi oldugu icin bosaltmak icin bos brackets kullaniyoruz.
    //* Obje olsa {} kullanacaktik
  };
  const yukle = () => {
    setPeople(data);
  };

  return (
    <Card>
      <Card.Body>
        <h1>Bugün Doğanlar</h1>
        <p>Bugün doğan {people.length} kişi bulundu</p>

        {people.map((item) => {
          const { id, image, name, age } = item;
          return <Person image={image} name={name} age={age} key={id} />;
        })}
        <Button variant="danger" onClick={temizle}>
          Temizle
        </Button>
        <Button variant="success" onClick={yukle}>
          Yükle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BornToday;
