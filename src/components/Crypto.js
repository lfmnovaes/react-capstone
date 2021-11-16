import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Crypto(data) {
  const {
    id, symbol, name, img,
  } = data;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} className="stretched-link" />
        <Card.Body>
          <Card.Title>{symbol}</Card.Title>
          <Card.Text>
            <a href={`/${id}`} className="stretched-link">
              {name}
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
