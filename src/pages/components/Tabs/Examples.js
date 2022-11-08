import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';

class Sonnet extends React.Component {
  render() {
    return null;
  }
}

const Examples = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey='profile'
        id='uncontrolled-tab-example'
        className='mb-3'>
        <Tab eventKey='home' title='Home'>
          <Sonnet />
        </Tab>
        <Tab eventKey='profile' title='Profile'>
          <Sonnet />
        </Tab>
        <Tab eventKey='contact' title='Contact' disabled>
          <Sonnet />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Examples;
