import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel, Row, Col, Button, Card } from 'react-bootstrap';
import garotosperdidos from '../../images/garotosperdidos.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BoostrapCarro() {
  return (
    <div>
      <h1>Teste</h1>
      <Row>
        <Col sm={6} md={4} lg={3} className='mb-3'>
          <Card style={{ maxWidth: 600, margin: 1 }}>
            <Link to={`/#`}>
              <img
                src={garotosperdidos}
                className='card-img-top'
                alt={'teste'}
              />
            </Link>
          </Card>
        </Col>
        <Col sm={6} md={4} lg={3} className='mb-3'>
          <Card>
            <Link to={`/#`}>
              <img
                src={garotosperdidos}
                className='card-img-top'
                alt={'teste'}
              />
            </Link>
            <Card.Body>
              <Card.Title>teste2</Card.Title>
              <Card.Text>texto texto texto</Card.Text>
              <Button>Out of stockas</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} lg={3} className='mb-3'>
          <Card>
            <Link to={`/#`}>
              <img
                src={garotosperdidos}
                className='card-img-top'
                alt={'teste'}
              />
            </Link>
            <Card.Body>
              <Card.Title>teste3</Card.Title>
              <Card.Text>texto texto texto</Card.Text>
              <Button>Out of stockas</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} lg={3} className='mb-3'>
          <Card>
            <Link to={`/#`}>
              <img
                src={garotosperdidos}
                className='card-img-top '
                alt={'teste'}
              />
            </Link>
            <Card.Body>
              <Card.Title>teste3</Card.Title>
              <Card.Text>texto texto texto</Card.Text>
              <Button>Out of stockas</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} lg={3} className='mb-3'>
          <Card>
            <Link to={`/#`}>
              <img
                src={garotosperdidos}
                className='card-img-top'
                alt={'teste'}
              />
            </Link>
            <Card.Body>
              <Card.Title>teste3</Card.Title>
              <Card.Text>texto texto texto</Card.Text>
              <Button>Out of stockas</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
