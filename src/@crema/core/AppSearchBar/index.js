import React from 'react';
import {FormControl, InputGroup} from 'react-bootstrap';
import {useIntl} from 'react-intl';
import {AiOutlineSearch} from 'react-icons/ai';
import styles from './index.module.scss';
import { Dropdown, DropdownButton } from 'react-bootstrap';
const AppSearch = () => {
  const {messages} = useIntl();
  return (
    <InputGroup className={styles.appSearchBar}>
    
    </InputGroup>
  );
};

export default AppSearch;
