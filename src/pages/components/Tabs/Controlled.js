import React, {useState} from 'react';
import {Tab, Tabs} from 'react-bootstrap';

class Sonnet extends React.Component {
  render() {
    return null;
  }
}

function ControlledTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Sonnet />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Sonnet />
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <Sonnet />
      </Tab>
    </Tabs>
  );
}


const Controlled = () => {
  return (
    <div>
      <ControlledTabs />
    </div>
  );
};

export default Controlled;