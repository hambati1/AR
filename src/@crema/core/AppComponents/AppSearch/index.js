import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import AppFloatingOutline from '../AppFloatingOutline';

const AppSearch = ({
  placeholder,
  className,
  style,
  onChange,
  defaultValue,
  disabled,
  value,
  ...restProps
}) => {
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    setInputVal(value || defaultValue);
  }, [value, defaultValue]);

  const onInputChange = (event) => {
    setInputVal(event.target.value);
    if (onChange) onChange(event);
  };

  return (
    <AppFloatingOutline
      placeholder={placeholder}
      className={`app-search ${className}`}
      style={style}
      disabled={disabled}
      value={inputVal}
      eleID={inputRef?.current?.props?.id}>
      <input
        placeholder=''
        autoComplete='off'
        value={inputVal}
        disabled={disabled}
        defaultValue={defaultValue}
        onChange={onInputChange}
        {...restProps}
        ref={inputRef}
      />
    </AppFloatingOutline>
  );
};

AppSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
};

AppSearch.defaultProps = {
  className: '',
  disabled: false,
};

export default React.memo(AppSearch);
