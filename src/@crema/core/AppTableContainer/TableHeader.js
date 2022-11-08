import React from 'react';
import styles from './TableHeader.module.scss';
import PropTypes from 'prop-types';

const TableHeader = ({columns}) => {
  return (
    <thead>
      <tr>
        {columns.map((data, index) => (
          <th
            key={index}
            className={styles.tableHeading}>
            {data.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

TableHeader.propTypes = {
  columns: PropTypes.array,
  className: PropTypes.string,
};
