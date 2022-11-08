import React from 'react';
import {Col, Container, Image, Row} from 'react-bootstrap';

const Shape = () => {
  return (
    <div style={{width: '100%'}}>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src='https://via.placeholder.com//171x180' rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src='https://via.placeholder.com//171x180' roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src='https://via.placeholder.com//171x180' thumbnail />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shape;
