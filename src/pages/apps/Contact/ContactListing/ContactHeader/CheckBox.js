import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {Form} from "react-bootstrap";
import styles from '../index.module.scss';

const CheckBox = ({checkedContacts, setCheckedContacts}) => {
  const contactList = useSelector(({contactApp}) => contactApp.contactList);

  const onHandleMasterCheckbox = (event) => {
    if (event.target.checked) {
      const contactIds = contactList.map((contact) => contact.id);
      setCheckedContacts(contactIds);
    } else {
      setCheckedContacts([]);
    }
  };

  return (
    <div className={styles.contactHeaderCheckboxView}>
      <Form.Check type="checkbox"
                  color='primary'
                  checked={
                    contactList.length > 0 &&
                    checkedContacts.length === contactList.length
                  }
                  onChange={onHandleMasterCheckbox}/>
    </div>
  );
};

export default CheckBox;

CheckBox.propTypes = {
  checkedContacts: PropTypes.array.isRequired,
  setCheckedContacts: PropTypes.func,
};
