import React from 'react';
import PropTypes from 'prop-types';
import AppTableContainer from './index';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const AppTable = ({columns, data, ...rest}) => {
  return (
    <AppTableContainer {...rest}>
      <TableHeader columns={columns} />
      <tbody>
        {data.map((row, index) => {
          return (
            <TableRow key={index} row={row} index={index} columns={columns} />
          );
        })}
      </tbody>
    </AppTableContainer>
  );
};

export default AppTable;

AppTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.string,
};
