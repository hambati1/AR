import React from 'react';
import {Accordion, Card, useAccordionButton} from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
function CustomToggle({children, eventKey}) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type='button'
      style={{backgroundColor: 'pink'}}
      onClick={decoratedOnClick}>
      {children}
    </button>
  );
}

function Custom() {
  return (
    <Accordion defaultActiveKey='0'>
      <Card>
        <Card.Header>
          <CustomToggle eventKey='0'>Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>Hello! Im the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey='1'>Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey='1'>
          <Card.Body>Hello! Im another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Custom;
