import React from 'react';
import styles from './TableRow.module.scss';
import PropTypes from 'prop-types';

const TableRow = ({row, index, columns}) => {
  console.log('columns: ', columns);
  return (
    <tr key={index}>
      {columns.map((column) => (
        <td
          key={column.dataIndex + index}
          className={styles.tableItem}
          align={column.align ? column.align : 'left'}>
          <>
            {column.render
              ? column.render(row[column.dataIndex], row)
              : row[column.dataIndex]}
          </>
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
TableRow.propTypes = {
  row: PropTypes.object,
  columns: PropTypes.array,
  index: PropTypes.number,
};
