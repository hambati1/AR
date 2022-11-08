import React from 'react';
import {FiMoreVertical} from 'react-icons/fi';
import {Dropdown} from 'react-bootstrap';
import AppIconBtn from '../AppIconBtn';
import clsx from 'clsx';
import styles from './index.module.scss';

const options = ['View More', 'Update Data', 'Clear Data'];
const AppMenu = () => {
  return (
    <Dropdown align='end'>
      <Dropdown.Toggle
        id='dropdown-basic'
        className={clsx(
          styles.dropdownToggleBtn,
          'p-0 bg-transparent border-0 d-flex align-items-center shadow-none',
        )}>
        <AppIconBtn smallBtn>
          <FiMoreVertical />
        </AppIconBtn>
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.appDropdownMenu}>
        {options.map((option) => (
          <Dropdown.Item key={option} href='#/action-1'>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AppMenu;
