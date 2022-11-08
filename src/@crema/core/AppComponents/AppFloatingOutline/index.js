import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import {useAutoComplete} from '../../../utility/hooks/useAutoComplete';
import clsx from 'clsx';

const AppFloatingOutline = ({
  placeholder,
  value,
  eleID,
  disabled,
  className,
  children,
  ...restProps
}) => {
  const [isFocused, setFocused] = useState(false);
  const {filled, setFilled} = useAutoComplete();
  const wrapperRef = useRef();

  useEffect(() => {
    setFilled(false);
  }, [isFocused]);

  useEffect(() => {
    if (value && Array.isArray(value) && !value.length) {
      setFocused(false);
    }
  }, [value]);

  const canShrink = () => {
    if (typeof value === 'number' && value >= 0) {
      return true;
    } else if (Array.isArray(value) && !!value.length) {
      return true;
    } else if (value) {
      return true;
    } else if (filled) {
      return true;
    }
    return false;
  };

  const focusedClass = isFocused && !disabled ? 'focused' : '';
  const shrinkClass = (isFocused && !disabled) || canShrink() ? 'shrink' : '';

  return (
    <div
      ref={wrapperRef}
      className={clsx(styles.appFormControl, className, focusedClass)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      {...restProps}>
      <label
        className={clsx(
          styles.inputLabel,
          'input-label',
          shrinkClass,
          focusedClass,
        )}
        htmlFor={eleID}>
        {placeholder}
      </label>
      <div className={clsx(styles.inputContainer, focusedClass)}>
        {children}

        <fieldset className='form-control-fieldset' aria-hidden='true'>
          <legend className={`fieldset-legend ${shrinkClass}`}>
            <span>{placeholder}</span>
          </legend>
        </fieldset>
      </div>
    </div>
  );
};

AppFloatingOutline.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
  eleID: PropTypes.any,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

AppFloatingOutline.defaultProps = {
  className: '',
  eleID: '',
  value: '',
  disabled: false,
};

export default React.memo(AppFloatingOutline);
