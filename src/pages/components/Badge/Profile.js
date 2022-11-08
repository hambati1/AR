import React from 'react';
import {Badge, Button} from 'react-bootstrap';

const Profile = () => {
  return (
    <div>
      <Button variant='primary'>
        Profile <Badge bg='secondary'>9</Badge>
        <span className='visually-hidden'>unread messages</span>
      </Button>
    </div>
  );
};

export default Profile;
