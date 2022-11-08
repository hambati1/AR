import React from 'react';
import {Col, Tab, ListGroup, Row} from 'react-bootstrap';

class Sonnet extends React.Component {
  render() {
    return null;
  }
}

const Tabbed = () => {
  return (
    <div>
      <Tab.Container id='list-group-tabs-example' defaultActiveKey='#link1'>
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href='#link1'>
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action href='#link2'>
                Link 2
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey='#link1'>
                <Sonnet />
              </Tab.Pane>
              <Tab.Pane eventKey='#link2'>
                <Sonnet />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Tabbed;
