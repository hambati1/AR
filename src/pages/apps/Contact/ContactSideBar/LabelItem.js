import React from 'react';
import PropTypes from 'prop-types';
import {MdLabelOutline} from 'react-icons/md';
import {NavLink} from 'react-router-dom';
import styles from './index.module.scss';

const LabelItem = ({label}) => {
  return (
    <div key={label.id}>
      <NavLink
        to={`/apps/contact/label/${label.alias}`}
        className={styles.contactSidebarLabelItem}>
        <span className={styles.contactSidebarLabelIcon}>
          <MdLabelOutline style={{color: `${label.color}`}} />
        </span>
        {label.name}
      </NavLink>
    </div>
  );
};

export default LabelItem;

LabelItem.propTypes = {
  label: PropTypes.object.isRequired,
};
