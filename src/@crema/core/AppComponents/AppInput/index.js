import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import AppFloatingOutline from '../AppFloatingOutline';

const AppInput = ({
  placeholder,
  className,
  style,
  value,
  disabled,
  defaultValue,
  onChange,
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
      className={`app-input ${className}`}
      style={style}
      disabled={disabled}
      value={inputVal}
      eleID={inputRef?.current?.props?.id}>
      <input
        autoComplete='off'
        placeholder=''
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

AppInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  style: PropTypes.object,
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
};

AppInput.defaultProps = {
  className: '',
  disabled: false,
};

export default React.memo(AppInput);
