import React, {useContext} from 'react';
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionButton,
} from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
function ContextAwareToggle({children, eventKey, callback}) {
  const {activeEventKey} = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type='button'
      style={{backgroundColor: isCurrentEventKey ? 'pink' : 'lavender'}}
      onClick={decoratedOnClick}>
      {children}
    </button>
  );
}

function Toggle() {
  return (
    <Accordion defaultActiveKey='0'>
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey='0'>Click me!</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>Hello! Im the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey='1'>Click me!</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey='1'>
          <Card.Body>Hello! Im another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Toggle;
