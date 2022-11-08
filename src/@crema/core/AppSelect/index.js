import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {Form} from 'react-bootstrap';
import clsx from "clsx";

const AppSelect = ({menus, onChange, defaultValue, selectionKey, selectBoxClass}) => {
  const [selectionType, setSelectionType] = useState(defaultValue);

  const handleSelectionType = (value) => {
    setSelectionType(value);
    onChange(value);
  };

  return (
    <Form.Select
      aria-label='Default select example'
      defaultValue={defaultValue}
      value={selectionType}
      onChange={handleSelectionType}
      className={clsx(styles.selectBox, selectBoxClass)}>
      {menus.map((menu, index) => (
        <option
          key={index}
          value={selectionKey ? menu[selectionKey] : menu}
          className={styles.selectOption}>
          {selectionKey ? menu[selectionKey] : menu}
        </option>
      ))}
    </Form.Select>
  );
};

export default AppSelect;
AppSelect.propTypes = {
  menus: PropTypes.array,
  onChange: PropTypes.func,
  defaultValue: PropTypes.any,
  selectionKey: PropTypes.any,
  selectBoxClass: PropTypes.string,
};
AppSelect.defaultProps = {
  menus: [],
  defaultValue: '',
  selectionKey: '',
};
