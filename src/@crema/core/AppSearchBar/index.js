import React from 'react';
import {FormControl, InputGroup} from 'react-bootstrap';
import {useIntl} from 'react-intl';
import {AiOutlineSearch} from 'react-icons/ai';
import styles from './index.module.scss';

const AppSearch = () => {
  const {messages} = useIntl();
  return (
    <InputGroup className={styles.appSearchBar}>
      <FormControl
        placeholder={messages['common.searchHere']}
        aria-label='Username'
        aria-describedby='basic-addon1'
      />
      <InputGroup.Text id='basic-addon1' className={styles.searchBtn}>
        <AiOutlineSearch />
      </InputGroup.Text>
    </InputGroup>
  );
};

export default AppSearch;
