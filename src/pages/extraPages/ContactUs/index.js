import React from 'react';
import ContactUsForm from './ContactUsForm';
import SendMessage from './SendMessage';
import contactUsData from '@crema/services/db/extraPages/contactUs';
import Address from './Address';
import SimpleMap from './SimpleMap';
import AppCard from '@crema/core/AppCard';
import AppRowContainer from '@crema/core/AppRowContainer';
import {Col} from 'react-bootstrap';
import styles from './index.module.scss';

const ContactUs = () => {
  return (
    <AppCard>
      <div className={styles.contactSimpleMap}>
        <SimpleMap />
      </div>
      <SendMessage sendMessage={contactUsData.sendMessage} />
      <AppRowContainer>
        <Col item xs={12} md={6}>
          <ContactUsForm />
        </Col>
        <Col item xs={12} md={6}>
          <Address />
        </Col>
      </AppRowContainer>
    </AppCard>
  );
};

export default ContactUs;
