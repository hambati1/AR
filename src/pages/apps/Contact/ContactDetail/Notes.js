import React from 'react';
import IntlMessages from '@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
import {Form} from "react-bootstrap";
import styles from './index.module.scss';

const Notes = (props) => {
  const {contact} = props;
  const {messages} = useIntl();

  return (
    <div className={styles.contactNote}>
      <h6 className={styles.contactDetailModalItemTitle}>
        <IntlMessages id='common.notes'/>
      </h6>

      <Form.Control as="textarea" rows={4}
                    placeholder={messages['common.notes']}
                    name='notes'
                    value={contact.notes}/>
    </div>
  );
};

export default Notes;

Notes.propTypes = {
  contact: PropTypes.object.isRequired,
};
