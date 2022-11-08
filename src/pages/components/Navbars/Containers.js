import React from 'react';
import {Container, Navbar} from 'react-bootstrap';

const Containers = () => {
  return (
    <div>
      <Container>
        <Navbar expand='lg' variant='light' bg='light'>
          <Container>
            <Navbar.Brand href='#'>Navbar</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Containers;
