import React from 'react';
import ProtoTypes from 'prop-types';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AppCircularProgress = ({
  percent,
  children,
  hidePercentage,
  minWidth,
  maxWidth,
  width,
  percentStyle,
  trailColor,
  strokeColor,
  thickness,
  ...props
}) => {
  return (
    <span
      style={{
        minWidth: minWidth,
        maxWidth: width || maxWidth,
        maxHeight: width || maxWidth,
        alignSelf: 'center',
        boxSizing: 'content-box',
      }}>
      <CircularProgressbarWithChildren
        value={percent}
        styles={{
          ...buildStyles({
            pathColor: strokeColor,
            trailColor: trailColor,
          }),
        }}
        {...props}>
        {children}
      </CircularProgressbarWithChildren>
    </span>
  );
};
export default AppCircularProgress;

AppCircularProgress.propTypes = {
  hidePercentage: ProtoTypes.bool,
  children: ProtoTypes.node,
  minWidth: ProtoTypes.number,
  maxWidth: ProtoTypes.number,
  pathColor: ProtoTypes.string,
  trailColor: ProtoTypes.string,
  percent: ProtoTypes.number,
  strokeWidth: ProtoTypes.number,
  percentStyle: ProtoTypes.object,
};

AppCircularProgress.defaultProps = {
  hidePercentage: false,
  maxWidth: 160,
  strokeColor: '#23fa23',
  trailColor: '#d6d6d6',
  strokeWidth: 10,
};
